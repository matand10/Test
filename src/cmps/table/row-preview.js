import React, { useEffect, useState } from "react"
import { itemService } from "../../services/item.service"
import { CellPreview } from "./cell-preview"
import { SubTable } from "./sub-table"

export const RowPreview = (props) => {
    const { row, onRowDelete, provided, onRowEdit } = props
    const [accounts, setAccouts] = useState([])
    const [isExpanded, setIsExpanded] = useState(false)

    useEffect(() => {
        row.isExpanded = isExpanded
    }, [isExpanded])

    const onSelectRow = async (row) => {
        onRow(row)
        setIsExpanded(!isExpanded)
    }

    const onRow = async (row) => {
        const user = row.original
        const accounts = await itemService.getUserAccounts(user.userId)
        setAccouts(accounts)
    }

    const selectedRowStyle = {
        backgroundColor: isExpanded ? '#b7e4ff' : ''
    }

    return (
        <React.Fragment>
            <tr
                ref={provided.innerRef}
                {...provided.draggableProps}
                {...provided.dragHandleProps}
                {...row.getRowProps()} onClick={() => onSelectRow(row)}
            >
                {row.cells.map(cell => {
                    return (
                        <CellPreview cell={cell} row={row} onRowDelete={onRowDelete} selectedRowStyle={selectedRowStyle} onRowEdit={onRowEdit} />
                    )
                })}
            </tr>
            {isExpanded && <tr>
                <td colSpan="9">{<SubTable accounts={accounts} />}</td>
            </tr>}
        </React.Fragment>
    )
}