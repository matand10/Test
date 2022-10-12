
import { storageService } from './async-storage.service.js'
import { httpService } from './http.service'


const ACCOUNTS_KEY = 'admin_get_user_accounts'
const ORGANIZATION_KEY = 'admin_get_organization_users'


const STORAGE_KEY_USERS = 'users'
const STORAGE_KEY_ACCOUNTS= 'accounts'




export const itemService = {
    getUsers,
    getUserAccounts,
    getById,
    save,
    remove,
}


async function getUsers(currentPage) {
    // const data = await getDataFromCache(STORAGE_KEY_USERS)
    // if (data.length) {
    //     console.log('From Cache')
    //     return data[0].list
    // }
    // console.log('From API')
    const users = await httpService.post(ORGANIZATION_KEY, _getUsersJson(currentPage))
    // await storageService.post(STORAGE_KEY_USERS, users)
    return users.list
}


async function getUserAccounts(userId) {
    // const data = getDataFromCache(STORAGE_KEY_ACCOUNTS)
    // if (data.length) {
    //     console.log('From Cache')
    //     return data
    // }
    // console.log('From API')
    const accounts = await httpService.post(ACCOUNTS_KEY, _getAccountsJson(userId))
    // await storageService.post(STORAGE_KEY_ACCOUNTS, accounts)
    return accounts.list
}


async function getDataFromCache(entityType) {
    const res = await storageService.query(entityType)
    return res
}


async function getById(itemId) {
    try {
        // return await httpService.get(`item/${itemId}`)
        return await storageService.get(STORAGE_KEY_USERS, itemId)
    } catch (err) {
        console.log('err', err)
    }
}


async function remove(itemId) {
    // await httpService.delete(`item/${itemId}`)
    return storageService.remove(STORAGE_KEY_USERS, itemId)
}


async function save(item) {
    let savedItem
    try {
        if (item._id) {
            // savedItem = await httpService.put(`item/${item._id}`, item)
            return storageService.put(STORAGE_KEY_USERS, item)

        } else {
            // savedItem = await httpService.post('item', item)
            return storageService.post(STORAGE_KEY_USERS, item)
        }
        // return savedItem
    } catch (err) {
        console.log('err', err)
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