import './table-btns.scss'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { AiOutlineArrowRight } from 'react-icons/ai'



export const TableBtns = (props) => {
    const { setCurrentPage, currentPage } = props

    const onChangePage = (num) => {
        if (currentPage >= 0) return setCurrentPage((prevState) => prevState + num)
    }

    return (
        <section className="pagination-btns">
            <button onClick={() => onChangePage(-1)}><AiOutlineArrowLeft /></button>
            <span>{currentPage}</span>
            <button onClick={() => onChangePage(1)}><AiOutlineArrowRight /></button>
        </section>
    )
}