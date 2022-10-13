import './dots-modal.scss'
import { GrTransaction } from 'react-icons/gr'
import { FaMoneyBill } from 'react-icons/fa'
import { GiExpense } from 'react-icons/gi'
import React, { useEffect, useRef } from 'react'

export const DotsModal = (props) => {
    const { setIsOpen } = props
    let menuRef = useRef()

    useEffect(() => {
        document.addEventListener('mousedown', eventListener)
        return () => {
            document.removeEventListener('mousedown', eventListener)
        }
    })

    const eventListener = ({ target }) => {
        if (!menuRef?.current?.contains(target)) {
            setIsOpen(false)
        }
    }


    return (
        <React.Fragment>

            <tr className="dots-modal-container" ref={menuRef}>
                <td>
                    <span><GrTransaction /></span>
                    <h4>Transactions</h4>
                </td>
                <td>
                    <span><FaMoneyBill /></span>
                    <h4>Income</h4>
                </td>
                <td>
                    <span><GiExpense /></span>
                    <h4>Expenses</h4>
                </td>
            </tr>
        </React.Fragment>
    )
}