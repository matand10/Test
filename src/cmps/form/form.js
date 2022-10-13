import { useEffect, useState } from 'react'
import { itemService } from '../../services/item.service'
import './form.scss'

const inputs = [
    {
        id: 1,
        label: 'First Name',
        name: 'firstName',
        type: 'text',
    },
    {
        id: 2,
        label: 'Last Name',
        name: 'lastName',
        type: 'text',
    },
    {
        id: 3,
        label: 'Email',
        name: 'email',
        type: 'email',
    },
    {
        id: 4,
        label: 'Organization',
        name: 'organizationCode',
        type: 'text',
    },
    {
        id: 5,
        label: 'Status',
        name: 'status',
        type: 'text',
    },
    {
        id: 6,
        label: 'Last Login',
        name: 'lastLoginDate',
        type: 'date',
    },
]


export const Form = (props) => {
    const { onAddUser, editMode, setEditMode } = props
    const [user, setUser] = useState({})

    useEffect(() => {
        const newUser = itemService.createUser(editMode.user)
        setUser(newUser)
    }, [])

    const handleType = ({ target }) => {
        const { value } = target
        const { name } = target
        setUser((prevState) => ({ ...prevState, [name]: value }))
    }

    const onSubmitForm = (ev) => {
        ev.preventDefault()
        onAddUser(user)
        setEditMode({})
    }

    return (
        <section className="table-from-container">
            <form onSubmit={onSubmitForm}>
                {inputs.map(input => {
                    return (
                        <div key={input.id}>
                            <label>{input.label}</label>
                            <input type={input.type} placeholder={input.label} name={input.name} onChange={handleType} defaultValue={user[input.name]} />
                        </div>
                    )
                })}

                <button className="submit-btn">Submit</button>
            </form>
        </section>
    )
}