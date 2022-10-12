import './table-btns.scss'
export const TableBtns = (props) => {
    const { setCurrentPage, currentPage } = props

    const onChangePage = (num) => {
        if (currentPage >= 0) return setCurrentPage((prevState) => prevState + num)
    }

    return (
        <section className="pagination-btns">
            <button onClick={() => onChangePage(-1)}>Prev</button>
            <button onClick={() => onChangePage(1)}>Next</button>
        </section>
    )
}