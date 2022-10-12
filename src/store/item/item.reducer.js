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
            return {...state, users: action.users}
        case 'REMOVE_ITEM':
            items = state.items.filter(item => item._id !== action.itemId)
            return { ...state, items }
        case 'ADD_ITEM':
            items = [action.item, ...state.items]
            return { ...state, items }
        case 'UPDATE_ITEM':
            items = state.items.map(currItem =>
                (currItem._id === action.item._id) ? action.item : currItem)
            return { ...state, items }
        default:
            return state
    }
}
