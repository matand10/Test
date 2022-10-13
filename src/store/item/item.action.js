import { itemService } from '../../services/item.service.js'


export function loadUsers(currentPage) {
    return async dispatch => {
        try {
            const users = await itemService.getUsers(currentPage)
            dispatch({ type: 'SET_USERS', users })
        } catch (err) {
            console.log(err)
        }
    }
}


export function setUsers(users) {
    return async dispatch => {
        try {
            dispatch({ type: 'SET_USERS', users })
        } catch (err) {
            console.log(err)
        }
    }
}


export function setFilteredUsers(users) {
    return async dispatch => {
        try {
            dispatch({ type: 'SET_FILTERED', users })
        } catch (err) {
            console.log(err)
        }
    }
}



export function removeUser(userId) {
    return async dispatch => {
        try {
            await itemService.remove(userId)
            dispatch({ type: 'REMOVE_USER', userId })
        } catch (err) {
            console.log(err)
        }
    }
}

export function saveUser(user) {
    return async dispatch => {
        try {
            await itemService.save(user)
            dispatch({ type: 'ADD_USER', item: user })
        } catch (err) {
            console.log(err)
        }
    }
}

