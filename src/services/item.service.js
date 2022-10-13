import { httpService } from './http.service'


const ACCOUNTS_KEY = 'admin_get_user_accounts'
const ORGANIZATION_KEY = 'admin_get_organization_users'


export const itemService = {
    getUsers,
    getUserAccounts,
    save,
    remove,
    sortRows,
    onDragRow
}


async function getUsers(currentPage) {
    try {
        const users = await httpService.post(ORGANIZATION_KEY, _getUsersJson(currentPage))
        return users.list
    } catch (err) {
        throw err
    }
}


async function getUserAccounts(userId) {
    try {
        const accounts = await httpService.post(ACCOUNTS_KEY, _getAccountsJson(userId))
        return accounts.list
    } catch (err) {
        throw err
    }
}


async function remove(userId) {
    console.log('Removing user with ID: ', userId)
}


async function save(user) {
    console.log('Saving user with ID: ', user.userId)
}


function onDragRow(list, startIdx, endIdx) {
    const res = Array.from(list)
    const [removed] = res.splice(startIdx, 1)
    res.splice(endIdx, 0, removed)
    return res
}

function sortRows(sortBy, rows) {
    let data = [...rows]
    if (sortBy.id === 'userId') {
        return data.sort((a, b) => a.userId - b.userId)
    } else if (sortBy.id === 'firstName' ||
        sortBy.id === 'lastName' ||
        sortBy.id === 'organizationCode') {
        const { id } = sortBy
        return data.sort((a, b) => {
            if (a[id] < b[id]) return -1
            else if (a[id] > b[id]) return 1
            else return 0
        })
    }
}


function _getUsersJson(currentPage) {
    return {
        content: {
            organizationCode: 'Ivory',
            pageNum: currentPage.toString(),
        }
    }
}

function _getAccountsJson(userId) {
    return {
        content: {
            userId,
        }
    }
}