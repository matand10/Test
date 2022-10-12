import './table-btns.scss'
import { MdOutlineArrowForwardIos } from 'react-icons/md'
import { MdOutlineArrowBackIos } from 'react-icons/md'



export const TableBtns = (props) => {
    const { setCurrentPage, currentPage } = props

    const onChangePage = (num) => {
        if (currentPage >= 0) return setCurrentPage((prevState) => prevState + num)
    }

    return (
        <section className="pagination-btns">
            <button onClick={() => onChangePage(-1)}><MdOutlineArrowBackIos /></button>
            <span>{currentPage}</span>
            <button onClick={() => onChangePage(1)}><MdOutlineArrowForwardIos /></button>
        </section>
    )
}