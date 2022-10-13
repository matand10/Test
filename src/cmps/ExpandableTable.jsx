import React, { useEffect, useState } from "react";
import { useTable, useExpanded } from 'react-table'
import { itemService } from "../services/item.service";
import { BiTrash } from 'react-icons/bi'
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { useDispatch } from "react-redux";
import { setUsers } from "../store/item/item.action";
import { Loader } from "./loader/loader";

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
                <thead>
                    {headerGroups.map((headerGroup, idx) => {
                        return (
                            <React.Fragment key={idx}>
                                <tr {...headerGroup.getHeaderGroupProps()}>
                                    {headerGroup.headers.map(column => {
                                        return (
                                            <th {...column.getHeaderProps()} onClick={() => (
                                                column.isSorting ? onSortTable(column) : null
                                            )}>{column.render('Header')}</th>
                                        )
                                    })}
                                    <th>Action</th>
                                </tr>
                            </React.Fragment>
                        )
                    })}
                </thead>
                <DragDropContext onDragEnd={onDragEnd}>
                    <Droppable droppableId="droppable">
                        {(provided, snapshot) => (
                            <tbody
                                {...provided.droppableProps}
                                {...getTableBodyProps()}
                                ref={provided.innerRef}
                            >
                                {rows.map((row, index) => {
                                    prepareRow(row)
                                    return (
                                        <Draggable key={row.id} draggableId={row.id.toString()} index={index}>
                                            {(provided, snapshot) => (
                                                <>
                                                    <RowPreview key={row.id} row={row}
                                                        onRowDelete={onRowDelete} provided={provided}
                                                        snapshot={snapshot} />

                                                </>
                                            )}

                                        </Draggable>
                                    )
                                })}
                                {provided.placeholder}
                            </tbody>
                        )}
                    </Droppable>
                </DragDropContext>
                <tfoot>
                    <tr>
                        <td colSpan={headerGroups[1].headers.length + 1}>{data.length} Rows</td>
                    </tr>
                </tfoot>
            </table>
        </div >
    )
}






export const ExpandableTable = (props) => {
    const columns = React.useMemo(() => props.columns, [])
    let { data, onDeleteUser } = props
    const [tableData, setTableData] = useState([])
    const dispatch = useDispatch()

    useEffect(() => {
        setTableData(data)
    }, [data])

    const onSortTable = (column) => {
        const sortedRows = itemService.sortRows(column, tableData)
        dispatch(setUsers(sortedRows))
    }

    if (tableData.length) return <Table columns={columns} data={tableData} onDeleteUser={onDeleteUser} onSortTable={onSortTable} />
    else return <Loader />
}







const SubTable = (props) => {
    const { accounts } = props
    return (
        <table>
            <thead>
                <tr>
                    <th>Account</th>
                    <th>Branch</th>
                    <th>Account Name</th>
                    <th>Account Type</th>
                    <th>Bank</th>
                </tr>
            </thead>

            <tbody>
                {accounts.map((account, idx) => {
                    return (
                        <tr key={idx}>
                            <td>{account.account}</td>
                            <td>{account.branch}</td>
                            <td>{account.accountName}</td>
                            <td>{account.accountType}</td>
                            <td>{account.bank}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}









const RowPreview = (props) => {
    const { row, onRowDelete, provided } = props
    const [accounts, setAccouts] = useState([])
    const [isExpanded, setIsExpanded] = useState(false)

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
            <tr ref={provided.innerRef}
                {...provided.draggableProps}
                {...provided.dragHandleProps}
                {...row.getRowProps()} onClick={() => onSelectRow(row)}
            >
                {row.cells.map(cell => {
                    return (
                        <td {...cell.getCellProps()}>
                            {cell.render('Cell')}
                        </td>
                    )
                })}
                <td><button onClick={() => onRowDelete(row.original)}><BiTrash /></button></td>
            </tr>
            {isExpanded && <tr>
                <td colSpan={8}>{<SubTable accounts={accounts} />}</td>
            </tr>}
        </React.Fragment>
    )
}