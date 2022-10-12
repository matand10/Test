import { httpService } from './http.service'


const ACCOUNTS_KEY = 'admin_get_user_accounts'
const ORGANIZATION_KEY = 'admin_get_organization_users'


export const itemService = {
    getUsers,
    getUserAccounts,
    save,
    remove,
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