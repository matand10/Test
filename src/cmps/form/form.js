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
        label: 'Last Login',
        name: 'lastLoginDate',
        type: 'date',
    },
    {
        id: 6,
        label: 'Organization',
        name: 'organizationCode',
        type: 'text',
    },
    {
        id: 7,
        label: 'Status',
        name: 'status',
        type: 'text',
    },
]


export const Form = (props) => {
    const { } = props
    const [form, setForm] = useState(() => (
        {
            userId: '',
            status: '',
            firstName: '',
            lastName: '',
            status: '',
            organizationCode: '',
            lastLoginDate: '',
            email: ''
        }
    ))

    const handleType = ({ target }) => {
        const { value } = target
        const { name } = target
        setForm((prevState) => ({...prevState, [name]: value}))
    }

    const onSubmitForm = (ev) => {
        ev.preventDefault()
        console.log(form)
    }

    return (
        <section className="table-from-container">
            <form onSubmit={onSubmitForm}>
                {inputs.map(input => {
                    return (
                        <div key={input.id}>
                            <label>{input.label}</label>
                            <input type={input.type} placeholder={input.label} name={input.name} onChange={handleType}/>
                        </div>
                    )
                })}

                <button>Submit</button>
            </form>
        </section>
    )
}