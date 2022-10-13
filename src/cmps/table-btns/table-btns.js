import './table-btns.scss'
import { MdOutlineArrowForwardIos } from 'react-icons/md'
import { MdOutlineArrowBackIos } from 'react-icons/md'



export const TableBtns = (props) => {
    const { setCurrentPage, currentPage } = props

    const onPrevPage = (num) => {
        if (currentPage === 1) return
        else setCurrentPage((prevState) => prevState + num)
    }

    const onNextPage = (num) => {
        if (currentPage === 4) return
        else setCurrentPage((prevState) => prevState + num)
    }

    return (
        <section className="pagination-btns-container">
            <button className={`page-btns ${currentPage === 1 ? 'disabled' : 'activated'}`} onClick={() => onPrevPage(-1)}><MdOutlineArrowBackIos /></button>
            <span>{currentPage}</span>
            <button className={`page-btns ${currentPage === 4 ? 'disabled' : 'activated'}`} onClick={() => onNextPage(1)}><MdOutlineArrowForwardIos /></button>
        </section>
    )
}