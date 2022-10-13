import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { loadUsers, removeUser, saveUser } from "../../store/item/item.action"

import { COLUMNS } from '../../config/columns'


import { ExpandableTable } from "../../cmps/ExpandableTable"
import { TableBtns } from "../../cmps/table-btns/table-btns"
import { Actions } from "../../cmps/actions/actions"
import { Modal } from "../../cmps/modal/modal"

import './homepage.scss'

export const Homepage = () => {
    const { users, filteredUsers } = useSelector((storeState) => storeState.itemModule)
    const dispatch = useDispatch()
    const [currentPage, setCurrentPage] = useState(1)

    useEffect(() => {
        dispatch(loadUsers(currentPage))
    }, [currentPage, filteredUsers])

    const onDeleteUser = (userId) => {
        dispatch(removeUser(userId))
    }

    const onAddUser = (user) => {
        dispatch(saveUser(user))
    }

    const data = filteredUsers.length ? filteredUsers : users

    return (
        <section className="homepage-container">
            <Actions users={users} />
            <ExpandableTable columns={COLUMNS} data={data} onDeleteUser={onDeleteUser} />
            <TableBtns setCurrentPage={setCurrentPage} currentPage={currentPage} />
            <Modal onAddUser={onAddUser} />
        </section>
    )
}



