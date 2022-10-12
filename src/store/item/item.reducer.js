const initialState = {
    users: [],
    user: {},
    userAccounts: []
}

export function itemReducer(state = initialState, action) {
    let items
    let users

    switch (action.type) {
        case 'SET_USERS':
            return { ...state, users: action.users }
        case 'REMOVE_USER':
            users = state.users.filter(user => user.userId !== action.userId)
            return { ...state, users }
        case 'ADD_USER':
            users = [action.user, ...state.users]
            return { ...state, items }
        default:
            return state
    }
}
