const reducer = (state,action) => {
  switch(action.type){
    case 'SET_FAVORITE':
      const video = state.myList.find(item => item.id === action.payload.id)
      if(video){
        return state
      }
      return {
        ...state,
        myList: [...state.myList,action.payload]
      }
    case 'DELETE_FAVORITE':
      return {
        ...state,
        myList: state.myList.filter(item => item.id !== action.payload)
      }
    case 'REQUEST_LOGIN':
      return {
        ...state,
        user: action.payload
      }
    case 'REQUEST_LOGOUT':
      return {
        ...state,
        user: action.payload
      }
    case 'REQUEST_REGISTER':
        return {
          ...state,
          user: action.payload
        }
    case 'GET_VIDEO_SOURCE':
      return {
        ...state,
        playing: state.trends.find(item => item.id === Number(action.payload)) || state.originals.find(item => item.id === Number(action.payload)) || []
      }
    default:
      return state
  }
}

export default reducer