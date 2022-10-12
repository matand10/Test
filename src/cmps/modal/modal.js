import './modal.scss'
import { Form } from '../form/form'

export const Modal = (props) => {
    const { onAddUser } = props

    const onClose = () => {
        const elModal = document.querySelector('.modal')
        elModal.style.display = 'none'
    }

    return (
        <section className="modal">
            <div className="modal-content">
                <span className="close-modal cursor-pointer" onClick={onClose}>&times;</span>
                <Form onAddUser={onAddUser} />
            </div>
        </section>
    )
}

