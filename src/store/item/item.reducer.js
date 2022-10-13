const initialState = {
    users: [],
    user: null,
    userAccounts: [],
    filteredUsers: []
}

export function itemReducer(state = initialState, action) {
    let users

    switch (action.type) {
        case 'SET_USERS':
            return { ...state, users: action.users }
        case 'SET_FILTERED':
            return { ...state, filteredUsers: action.users }
        case 'REMOVE_USER':
            users = state.users.filter(user => user.userId !== action.userId)
            return { ...state, users }
        case 'ADD_USER':
            users = [action.user, ...state.users]
            return { ...state, users }
        case 'UPDATE_USER':
            users = state.users.map(currUser =>
                (currUser.userId === action.user.userId) ? { ...action.user } : currUser)
            return { ...state, users: users }
        default:
            return state
    }
}
