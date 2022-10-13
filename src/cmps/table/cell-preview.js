import { BiTrash } from 'react-icons/bi'
import { FiEdit } from 'react-icons/fi'


export const CellPreview = (props) => {
    const { cell, row, onRowDelete, selectedRowStyle, onRowEdit } = props

    let res
    if (cell.value) res = cell.render('Cell')
    else if (cell.column.id === 'expander') {
        if (row.isExpanded) res = '👇'
        else res = '👉'
    }
    else {
        if (cell.column.Header === 'Delete') res = <BiTrash onClick={(ev) => {
            ev.stopPropagation()
            onRowDelete(row.original)
        }} />
        else if (cell.column.Header === 'Update') res = <FiEdit onClick={(ev) => {
            ev.stopPropagation()
            onRowEdit(row.original)
        }} />
    }

    return (
        <td
            style={selectedRowStyle}
            {...cell.getCellProps()}>
            {res}
        </td>
    )
}