import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd"
import { RowPreview } from "./row-preview"

export const TableBody = (props) => {
    const { rows, onRowDelete, onDragEnd, getTableBodyProps, prepareRow } = props

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
    )
}