import React, { useEffect, useState } from "react";
import { useTable, useExpanded } from 'react-table'
import { useDispatch } from "react-redux";


import { itemService } from "../../services/user.service";
import { setUsers } from "../../store/user/user.action";


import { TableHead } from "./table-head";
import { TableBody } from "./table-body";
import { TableFoot } from "./table-foot";
import { Loader } from "../animations/loader";

import './_table.scss'



export const ExpandableTable = (props) => {
    const columns = React.useMemo(() => props.columns, [])
    let { data, onDeleteUser, onEditUser } = props
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

    const onRowEdit = (user) => {
        onEditUser(user)
    }

    if (!loading) return (
        <Table columns={columns} data={tableData}
            onDeleteUser={onDeleteUser} onSortTable={onSortTable} onRowEdit={onRowEdit} />
    )
    else return <Loader />
}






const Table = (props) => {
    const { columns, data, onDeleteUser, onSortTable, onRowEdit } = props
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
        <table className="table" {...getTableProps()}>
            <TableHead headerGroups={headerGroups} onSortTable={onSortTable} />
            <TableBody
                rows={rows}
                onRowDelete={onRowDelete}
                onDragEnd={onDragEnd}
                getTableBodyProps={getTableBodyProps}
                prepareRow={prepareRow}
                onRowEdit={onRowEdit}
                headerGroups={headerGroups} />
            <TableFoot headerGroups={headerGroups} data={data} />
        </table>
    )
}






