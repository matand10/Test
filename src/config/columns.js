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
                accessor: 'userId'
            },
            {
                Header: 'First Name',
                accessor: 'firstName',
            },
            {
                Header: 'Last Name',
                accessor: 'lastName',
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
                accessor: 'lastLoginDate'
            },
            {
                Header: 'Organization',
                accessor: 'organizationCode'
            }
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