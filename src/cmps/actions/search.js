import { AiOutlineSearch } from 'react-icons/ai'
import { useDispatch } from 'react-redux'
import { utilService } from '../../services/util.service'
import { setFilteredUsers } from '../../store/user/user.action'

export const Search = (props) => {
    const { users } = props
    const dispatch = useDispatch()

    const handleSearch = ({ target }) => {
        const { value } = target
        const regex = new RegExp(value, 'i')
        let filteredUsers = users.filter(user => regex.test(user.email) || regex.test(user.firstName) || regex.test(user.lastName))
        if (!value.length) filteredUsers = []
        dispatch(setFilteredUsers(filteredUsers))
    }


    return (
        <section className="search-container">
            <span><AiOutlineSearch /></span>
            <input type="text" placeholder="Search something" onChange={handleSearch} />
        </section>
    )
}

