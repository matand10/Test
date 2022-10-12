import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { loadUsers, removeUser, saveUser } from "../store/item/item.action"


import { COLUMNS } from '../config/columns'


import { ExpandableTable } from "../cmps/ExpandableTable"
import { Form } from "../cmps/form/form"
import { TableBtns } from "../cmps/table-btns/table-btns"
import { Actions } from "../cmps/actions/actions"



export const Homepage = () => {
    const { users, user, userAccounts } = useSelector((storeState) => storeState.itemModule)
    const dispatch = useDispatch()
    const [currentPage, setCurrentPage] = useState(1)

    useEffect(() => {
        dispatch(loadUsers(currentPage))
    }, [currentPage])

    const onDeleteUser = (userId) => {
        dispatch(removeUser(userId))
    }

    const onAddUser = (user) => {
        dispatch(saveUser(user))
    }

    return (
        <section className="homepage-container">
            <Actions />
            <ExpandableTable columns={COLUMNS} data={users} onDeleteUser={onDeleteUser} />
            <TableBtns setCurrentPage={setCurrentPage} currentPage={currentPage} />
            <Form onAddUser={onAddUser} />
        </section>
    )
}




