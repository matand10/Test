import React from "react"

export const TableHead = (props) => {
    const { headerGroups, onSortTable } = props

    return (
        <thead>
            {headerGroups.map((headerGroup, idx) => {
                return (
                    <React.Fragment key={idx}>
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map(column => {
                                return (
                                    <th {...column.getHeaderProps()} onClick={() => (
                                        column.isSorting ? onSortTable(column) : null
                                    )}>{column.render('Header')}</th>
                                )
                            })}
                        </tr>
                    </React.Fragment>
                )
            })}
        </thead>
    )
}