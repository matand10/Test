import { Search } from './search'
import './actions.scss'
import { AiOutlinePlusCircle } from 'react-icons/ai'



export const Actions = (props) => {
    const { users } = props

    return (
        <section className="actions-container">
            <Search users={users} />
            <button className="plus-btn"><AiOutlinePlusCircle /></button>
        </section>
    )
}

