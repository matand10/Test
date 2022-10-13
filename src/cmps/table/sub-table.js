export const SubTable = (props) => {
    const { accounts } = props
    return (
        <table>
            <thead>
                <tr>
                    <th>Account</th>
                    <th>Branch</th>
                    <th>Account Name</th>
                    <th>Account Type</th>
                    <th>Bank</th>
                </tr>
            </thead>

            <tbody>
                {accounts.map((account, idx) => {
                    return (
                        <tr key={idx}>
                            <td>{account.account}</td>
                            <td>{account.branch}</td>
                            <td>{account.accountName}</td>
                            <td>{account.accountType}</td>
                            <td>{account.bank}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}
