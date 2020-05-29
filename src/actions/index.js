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

export const requestLogout = payload => ({
    type: 'REQUEST_LOGOUT',
    payload
})

export const requestRegister = payload => ({
    type:'REQUEST_REGISTER',
    payload
})

export const getVideoSource = payload => ({
    type:'GET_VIDEO_SOURCE',
    payload
})

export const filterVideos = payload => ({
    type: 'FILTER_VIDEOS',
    payload
})