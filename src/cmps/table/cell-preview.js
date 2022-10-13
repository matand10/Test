import { BiTrash } from 'react-icons/bi'


export const CellPreview = (props) => {
    const { cell, row, onRowDelete, selectedRowStyle } = props

    let res
    if (cell.value) res = cell.render('Cell')
    else if (cell.column.id === 'expander') {
        if (row.isExpanded) res = '👇'
        else res = '👉'
    }
    else res = <BiTrash />

    return (
        <td onClick={(ev) => {
            if (!cell.value) {
                ev.stopPropagation()
                onRowDelete(row.original)
            }
        }}
            style={selectedRowStyle}
            {...cell.getCellProps()}>
            {res}
        </td>
    )
}