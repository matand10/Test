import React, { useEffect, useState } from "react";
import { useTable, useExpanded } from 'react-table'
import { itemService } from "../services/item.service";
import MOCK_DATA from '../data/data.json'
import { subRowColumn } from '../config/columns'

const Table = (props) => {
    const { columns, data } = props

    const onRow = async (row) => {
        const user = row.original
        const accounts = await itemService.getUserAccounts(user.userId)
        console.log(accounts)
        // onTableRow(user, accounts)
    }

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable(
        {
            columns,
            data,
        },
        useExpanded
    )

    return (
        <div>
            <table className="table" {...getTableProps()}>
                <thead>
                    {headerGroups.map(headerGroup => (
                        <React.Fragment>

                            <tr {...headerGroup.getHeaderGroupProps()}>
                                {headerGroup.headers.map(column => (
                                    <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                                ))}
                            </tr>
                        </React.Fragment>
                    ))}
                </thead>

                <tbody {...getTableBodyProps()}>
                    {rows.map((row) => {
                        prepareRow(row)
                        return (
                            <React.Fragment key={row.id}>
                                <tr {...row.getRowProps()} onClick={() => onRow(row)}>
                                    {row.cells.map(cell => {
                                        return <td {...cell.getCellProps()}>
                                            {cell.render('Cell')}

                                        </td>
                                    })}
                                </tr>
                                {/* {row.isExpanded && <SubRowTable />} */}
                            </React.Fragment>
                        )
                    })}
                </tbody>
            </table>
        </div >
    )
}

export const ExpandableTable = (props) => {
    const columns = React.useMemo(() => props.columns, [])
    let { data } = props
    const [tableData, setTableData] = useState([])

    useEffect(() => {
        setTableData(data)
    })

    const getSubRows = () => {

    }

    return (
        <Table columns={columns} data={tableData} />
    )
}


// const SubRowTable = (props) => {

//     console.log(subRowColumn)
//     return (
//         <tr className="nested" colSpan="1">
//             <td>
//                 <Table columns={subRowColumn} data={MOCK_DATA} />
//             </td>
//         </tr>
//     )
// }

const SubRowTable = (props) => {

    console.log(subRowColumn)
    return (
        <table>
            <thead>
                <tr>
                    <th>Account</th>
                    <th>Account</th>
                    <th>Account</th>
                    <th>Account</th>
                    <th>Account</th>
                    <th>Account</th>
                </tr>
            </thead>


            <tbody>
                <tr>
                    <td>1</td>
                    <td>2</td>
                    <td>3</td>
                </tr>
            </tbody>
        </table>
    )
}


