export const COLUMNS = [
    {
        id: 'expander',
        Header: ({ getToggleAllRowsExpandedProps, isAllRowsExpanded }) => (
            <span {...getToggleAllRowsExpandedProps()}>
                {isAllRowsExpanded ? '👇' : '👉'}
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
                {row.isExpanded ? '👇' : '👉'}
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
                isSorting: true
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