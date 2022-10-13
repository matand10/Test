import { BsArrowDownRightCircle } from 'react-icons/bs'
import { BsArrowRightCircle } from 'react-icons/bs'

export const COLUMNS = [
    {
        id: 'expander',
        Header: ({ getToggleAllRowsExpandedProps, isAllRowsExpanded }) => (
            <span {...getToggleAllRowsExpandedProps()}>
                {isAllRowsExpanded ? <BsArrowDownRightCircle /> : <BsArrowRightCircle />}
            </span>
        ),
        Cell: ({ row }) =>
        (
            <span
                {...row.getToggleRowExpandedProps({
                    style: {
                        paddingLeft: `${row.depth * 2}rem`,
                    },
                })}
            >
                {row.isExpanded ? <BsArrowDownRightCircle /> : <BsArrowRightCircle />}
            </span>
        )
    },
    {
        Header: 'Name',
        columns: [
            {
                Header: 'Id',
                accessor: 'userId',
                isSorting: true
            },
            {
                Header: 'First Name',
                accessor: 'firstName',
                isSorting: true
            },
            {
                Header: 'Last Name',
                accessor: 'lastName',
                isSorting: true
            },
        ],
    },
    {
        Header: 'Info',
        columns: [
            {
                Header: 'Email',
                accessor: 'email'
            },
            {
                Header: 'Last Login',
                accessor: 'lastLoginDate',
            },
            {
                Header: 'Organization',
                accessor: 'organizationCode'
            }
        ]
    },
    {
        Header: 'Actions',
        columns: [
            {
                Header: 'Delete',
                accessor: 'delete'
            },
            {
                Header: 'Update',
                accessor: 'update'
            },
            {
                Header: 'Menu',
                accessor: 'menu'
            },
        ]
    }
]


export const subRowColumn = [
    {
        Header: 'Account',
        accessor: 'account',
    },
    {
        Header: 'Account Name',
        accessor: 'accountName',
    },
    {
        Header: 'Bank',
        accessor: 'bank'
    }
]