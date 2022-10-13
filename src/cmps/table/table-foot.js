export const TableFoot = (props) => {
    const { headerGroups, data } = props
    return (
        <tfoot>
            <tr>
                <td colSpan={headerGroups[1].headers.length}>{data.length} Rows</td>
            </tr>
        </tfoot>
    )
}

