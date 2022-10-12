import { Search } from './search'
import './actions.scss'
import { AiOutlinePlusCircle } from 'react-icons/ai'



export const Actions = (props) => {
    const { users } = props

    const openModal = () => {
        const elModal = document.querySelector('.modal')
        elModal.style.display = 'block'
    }

    return (
        <section className="actions-container">
            <Search users={users} />
            <button onClick={openModal} className="plus-btn"><AiOutlinePlusCircle /></button>
        </section>
    )
}
