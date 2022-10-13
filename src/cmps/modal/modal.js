import './modal.scss'
import { Form } from '../form/form'

export const Modal = (props) => {
    const { onAddUser, setEditMode, editMode } = props

    const onClose = () => {
        setEditMode({})
    }

    return (
        <section className="modal">
            <div className="modal-content">
                <span className="close-modal cursor-pointer" onClick={onClose}>&times;</span>
                <Form onAddUser={onAddUser} editMode={editMode} setEditMode={setEditMode} />
            </div>
        </section>
    )
}

