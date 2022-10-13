import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { loadUsers, removeUser, saveUser } from "../../store/item/item.action"

import { COLUMNS } from '../../config/columns'


import { ExpandableTable } from "../../cmps/ExpandableTable"
import { TableBtns } from "../../cmps/table-btns/table-btns"
import { Actions } from "../../cmps/actions/actions"
import { Modal } from "../../cmps/modal/modal"

import './homepage.scss'
import { NoData } from "../../cmps/animations/no-data"

export const Homepage = () => {
    const { users, filteredUsers } = useSelector((storeState) => storeState.itemModule)
    const dispatch = useDispatch()
    const [currentPage, setCurrentPage] = useState(1)

    useEffect(() => {
        dispatch(loadUsers(currentPage))
        // refreshData()
    }, [currentPage, filteredUsers])

    const refreshData = () => {
        setTimeout(() => {
            window.location.reload()
            refreshData()
        }, (1000 * 60) * 3)
    }

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
            {data ?
                <>
                    <ExpandableTable columns={COLUMNS} data={data} onDeleteUser={onDeleteUser} />
                    <TableBtns setCurrentPage={setCurrentPage} currentPage={currentPage} />
                </>
                :
                <NoData />
            }
            <Modal onAddUser={onAddUser} />
        </section>
    )
}



