import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd"
import { RowPreview } from "./row-preview"

export const TableBody = (props) => {
    const { rows, onRowDelete, onDragEnd, getTableBodyProps, prepareRow, onRowEdit, headerGroups } = props

    return (
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
                                <Draggable key={row.index} draggableId={row.id.toString()} index={index}>
                                    {(provided, snapshot) => (
                                        <>
                                            <RowPreview row={row}
                                                onRowEdit={onRowEdit}
                                                onRowDelete={onRowDelete}
                                                provided={provided}
                                                snapshot={snapshot}
                                                headerGroups={headerGroups} />
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
    )
}
