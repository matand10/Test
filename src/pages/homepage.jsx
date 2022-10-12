import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { loadUsers } from "../store/item/item.action"


import { COLUMNS } from '../config/columns'


import { ExpandableTable } from "../cmps/ExpandableTable"
import { Form } from "../cmps/form/form"
import { TableBtns } from "../cmps/table-btns/table-btns"



export const Homepage = () => {
    const { users, user, userAccounts } = useSelector((storeState) => storeState.itemModule)
    const dispatch = useDispatch()
    const [currentPage, setCurrentPage] = useState(1)

    useEffect(() => {
        dispatch(loadUsers(currentPage))
    }, [currentPage])

    return (
        <section className="homepage-container">
            <ExpandableTable columns={COLUMNS} data={users}/>
            <TableBtns setCurrentPage={setCurrentPage} currentPage={currentPage} />
            <Form />
        </section>
    )
}


