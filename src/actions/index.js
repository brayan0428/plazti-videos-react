export const setFavorite = payload => ({
    type: 'SET_FAVORITE',
    payload
})

export const deleteFavorite = payload => ({
    type: 'DELETE_FAVORITE',
    payload
})

export const requestLogin = payload => ({
    type: 'REQUEST_LOGIN',
    payload
})