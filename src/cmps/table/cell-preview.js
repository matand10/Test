import { BiTrash } from 'react-icons/bi'
import { FiEdit } from 'react-icons/fi'
import { HiOutlineDotsHorizontal } from 'react-icons/hi'
import { BsArrowDownRightCircle } from 'react-icons/bs'
import { BsArrowRightCircle } from 'react-icons/bs'


export const CellPreview = (props) => {
    const { cell, row, onRowDelete, selectedRowStyle, onRowEdit, setIsOpen } = props

    let res
    if (cell.value) res = cell.render('Cell')
    else if (cell.column.id === 'expander') {
        if (row.isExpanded) res = <BsArrowDownRightCircle />
        else res = <BsArrowRightCircle />
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
        else res = <HiOutlineDotsHorizontal onClick={(ev) => {
            ev.stopPropagation()
            setIsOpen(true)
        }} />
    }


    return (
        <td
            style={selectedRowStyle}
            // IF we want to color row by conditions
            // className={`${row.original.firstName === 'Gilad' ? 'mark' : ''}`}
            {...cell.getCellProps()}>
            {res}
        </td>
    )
}