import { Search } from './search'
import './actions.scss'
import { AiOutlinePlusCircle } from 'react-icons/ai'
import { AiOutlineReload } from 'react-icons/ai'



export const Actions = (props) => {
    const { users, setEditMode } = props

    const openModal = () => {
        setEditMode((prevState) => ({ ...prevState, user: {} }))
    }

    return (
        <section className="actions-container">
            <Search users={users} />
            <button onClick={openModal} className="plus-btn"><AiOutlinePlusCircle /></button>
            <button onClick={() => window.location.reload()} className="plus-btn"><AiOutlineReload /></button>
        </section>
    )
}
