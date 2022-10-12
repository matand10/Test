import { useState } from 'react'
import './form.scss'

const inputs = [
    {
        id: 1,
        label: 'ID',
        name: 'userId',
        type: 'text',
    },
    {
        id: 2,
        label: 'First Name',
        name: 'firstName',
        type: 'text',
    },
    {
        id: 3,
        label: 'Last Name',
        name: 'lastName',
        type: 'text',
    },
    {
        id: 4,
        label: 'Email',
        name: 'email',
        type: 'email',
    },
    {
        id: 5,
        label: 'Organization',
        name: 'organizationCode',
        type: 'text',
    },
    {
        id: 6,
        label: 'Status',
        name: 'status',
        type: 'text',
    },
    {
        id: 7,
        label: 'Last Login',
        name: 'lastLoginDate',
        type: 'date',
    },
]


export const Form = (props) => {
    const { onAddUser } = props
    const [user, setUser] = useState(() => (
        {
            userId: '',
            status: '',
            firstName: '',
            lastName: '',
            organizationCode: '',
            lastLoginDate: '',
            email: ''
        }
    ))

    const handleType = ({ target }) => {
        const { value } = target
        const { name } = target
        setUser((prevState) => ({ ...prevState, [name]: value }))
    }

    const onSubmitForm = (ev) => {
        ev.preventDefault()
        onAddUser(user)
    }

    return (
        <section className="table-from-container">
            <form onSubmit={onSubmitForm}>
                {inputs.map(input => {
                    return (
                        <div key={input.id}>
                            <label>{input.label}</label>
                            <input type={input.type} placeholder={input.label} name={input.name} onChange={handleType} />
                        </div>
                    )
                })}

                <button className="submit-btn">Submit</button>
            </form>
        </section>
    )
}