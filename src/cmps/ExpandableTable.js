import React, { useEffect, useState } from "react";
import { useTable, useExpanded } from 'react-table'
import { useDispatch } from "react-redux";


import { itemService } from "../services/item.service";
import { setUsers } from "../store/item/item.action";


import { TableBody } from "./table/table-body";
import { TableHead } from "./table/table-head";
import { Loader } from "./animations/loader";





export const ExpandableTable = (props) => {
    const columns = React.useMemo(() => props.columns, [])
    let { data, onDeleteUser } = props
    const [tableData, setTableData] = useState([])
    const [loading, setLoading] = useState(true)
    const dispatch = useDispatch()

    useEffect(() => {
        setTableData(data)
        if (tableData.length) setLoading(false)
    }, [data, tableData])

    const onSortTable = (column) => {
        const sortedRows = itemService.sortRows(column, tableData)
        dispatch(setUsers(sortedRows))
    }

    if (!loading) return <Table columns={columns} data={tableData} onDeleteUser={onDeleteUser} onSortTable={onSortTable} />
    else return <Loader />
}






const Table = (props) => {
    const { columns, data, onDeleteUser, onSortTable } = props
    const dispatch = useDispatch()

    const onRowDelete = (user) => {
        onDeleteUser(user.userId)
    }

    const onDragEnd = (res) => {
        if (!res.destination) return
        const reOrderedList = itemService.onDragRow(
            data,
            res.source.index,
            res.destination.index
        )
        dispatch(setUsers(reOrderedList))
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
                <TableHead headerGroups={headerGroups} onSortTable={onSortTable} />
                <TableBody
                    rows={rows}
                    onRowDelete={onRowDelete}
                    onDragEnd={onDragEnd}
                    getTableBodyProps={getTableBodyProps}
                    prepareRow={prepareRow} />
                <tfoot>
                    <tr>
                        <td colSpan={headerGroups[1].headers.length + 1}>{data.length} Rows</td>
                    </tr>
                </tfoot>
            </table>
        </div >
    )
}






