import React, { useEffect, useState } from "react"
import { itemService } from "../../services/user.service"
import { DotsModal } from "../modal/dots-modal/dots-modal"
import { CellPreview } from "./cell-preview"
import { SubTable } from "./sub-table"

export const RowPreview = (props) => {
    const { row, onRowDelete, provided, onRowEdit, headerGroups, snapshot } = props
    const [accounts, setAccouts] = useState([])
    const [isExpanded, setIsExpanded] = useState(false)
    const [isOpen, setIsOpen] = useState(false)

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
        backgroundColor: isExpanded ? '#b7e4ff' : '',
        width: '300px'
    }

    return (
        <React.Fragment>
            <tr
                ref={provided.innerRef}
                {...provided.draggableProps}
                {...provided.dragHandleProps}
                {...row.getRowProps()} onClick={() => onSelectRow(row)}
                className="row-container">
                {row.cells.map((cell, idx) => {
                    return (
                        <CellPreview key={idx} cell={cell} row={row} onRowDelete={onRowDelete} selectedRowStyle={selectedRowStyle} onRowEdit={onRowEdit} setIsOpen={setIsOpen} />
                    )
                })}
            </tr>
            {isExpanded && <tr>
                <td colSpan={headerGroups[1].headers.length}>{<SubTable accounts={accounts} />}</td>
            </tr>}

            {isOpen && <DotsModal setIsOpen={setIsOpen} />}
        </React.Fragment>
    )
}

