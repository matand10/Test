import React, { useEffect, useState } from "react";
import { useTable, useExpanded } from 'react-table'
import { itemService } from "../services/item.service";
import MOCK_DATA from '../data/data.json'
import { subRowColumn } from '../config/columns'

const Table = (props) => {
    const { columns, data, onDeleteUser, onTableRow } = props



    const onRowDelete = (user) => {
        onDeleteUser(user.userId)
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
                    {headerGroups.map((headerGroup, idx) => {
                        return (
                            <React.Fragment key={idx}>
                                <tr {...headerGroup.getHeaderGroupProps()}>
                                    {headerGroup.headers.map(column => (
                                        <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                                    ))}
                                    <th>Action</th>
                                </tr>
                            </React.Fragment>
                        )
                    })}
                </thead>

                <tbody {...getTableBodyProps()}>
                    {rows.map((row) => {
                        prepareRow(row)
                        return (
                            <RowPreview key={row.id} row={row} onRowDelete={onRowDelete} />
                        )
                    })}
                </tbody>
            </table>
        </div >
    )
}

export const ExpandableTable = (props) => {
    const columns = React.useMemo(() => props.columns, [])
    let { data, onDeleteUser } = props
    const [tableData, setTableData] = useState([])

    useEffect(() => {
        setTableData(data)
    })

    return (
        <Table columns={columns} data={data} onDeleteUser={onDeleteUser} />
    )
}

const SubRowTable = (props) => {
    const { accounts } = props

    return (
        <table>
            <thead>
                <tr>
                    <th>Account</th>
                    <th>Account Name</th>
                    <th>Account Type</th>
                    <th>Bank</th>
                    <th>Branch</th>
                </tr>
            </thead>

            <tbody>
                {accounts.map((account, idx) => {
                    return (
                        <tr key={idx}>
                            <td>{account.account}</td>
                            <td>{account.accountName}</td>
                            <td>{account.accountType}</td>
                            <td>{account.bank}</td>
                            <td>{account.branch}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}









const RowPreview = (props) => {
    const { row, onRowDelete } = props
    const [isExpanded, setIsExpanded] = useState(false)
    const [accounts, setAccouts] = useState([])

    useEffect(() => {
        row.isExpanded = isExpanded
    }, [isExpanded])

    const onSelectRow = (row) => {
        onRow(row)
        setIsExpanded(!isExpanded)

    }

    const onRow = async (row) => {
        const user = row.original
        const accounts = await itemService.getUserAccounts(user.userId)
        setAccouts(accounts)
    }

    return (
        <React.Fragment>
            <tr {...row.getRowProps()} onClick={() => onSelectRow(row)}>
                {row.cells.map(cell => {
                    return (
                        <td {...cell.getCellProps()}>
                            {cell.render('Cell')}
                        </td>
                    )
                })}
                <td><button onClick={() => onRowDelete(row.original)}>Delete</button></td>
            </tr>
            <tr>
                {isExpanded && <td colSpan={8}>{<SubRowTable accounts={accounts} />}</td>}
            </tr>
        </React.Fragment>
    )
}