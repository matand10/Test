import { storageService } from './async-storage.service'
// import { httpService } from './http.service'

const STORAGE_KEY_LOGGEDIN_USER = 'loggedinUser'
export const userService = {
    login,
    logout,
    signup,
    getLoggedinUser,
    saveLocalUser,
    getUsers,
    getById,
    remove,
    update,
}

window.userService = userService


function getUsers() {
    try {
        return storageService.query('user')
        // return httpService.get(`user`)
    } catch (err) {
        throw err
    }
}

async function getById(userId) {
    try {
        const user = await storageService.get('user', userId)
        // const user = await httpService.get(`user/${userId}`)
        // gWatchedUser = user;
        return user
    } catch (err) {
        throw err
    }
}

async function remove(userId) {
    try {
        return storageService.remove('user', userId)
        // return httpService.delete(`user/${userId}`)
    } catch (err) {
        throw err
    }
}

async function update(user) {
    try {
        await storageService.put('user', user)
        // user = await httpService.put(`user/${user._id}`, user)
        if (getLoggedinUser()._id === user._id) saveLocalUser(user)
        return user;
    } catch (err) {
        throw err
    }
}

async function login(userCred) {
    try {
        const users = await storageService.query('user')
        const user = users.find(user => user.username === userCred.username)
        // const user = await httpService.post('auth/login', userCred)
        if (user) return saveLocalUser(user)
    } catch (err) {
        throw err
    }
}

async function signup(userCred) {
    try {
        const user = await storageService.post('user', userCred)
        // const user = await httpService.post('auth/signup', userCred)
        return saveLocalUser(user)
    } catch (err) {
        throw err
    }
}

async function logout() {
    sessionStorage.removeItem(STORAGE_KEY_LOGGEDIN_USER)
    // return await httpService.post('auth/logout')
}

function saveLocalUser(user) {
    sessionStorage.setItem(STORAGE_KEY_LOGGEDIN_USER, JSON.stringify(user))
    return user
}

function getLoggedinUser() {
    return JSON.parse(sessionStorage.getItem(STORAGE_KEY_LOGGEDIN_USER))
}
