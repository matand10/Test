import './actions.scss'
import { AiOutlineSearch } from 'react-icons/ai'




export const Actions = (props) => {
    const { } = props

    return (
        <section className="actions-container">
            <Search />
        </section>
    )
}

const Search = () => {

    return (
        <section className="search-container">
            <span><AiOutlineSearch /></span>
            <input type="text" placeholder="Search something" />
        </section>
    )
}

