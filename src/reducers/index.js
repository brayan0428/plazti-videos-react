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
    default:
      return state
  }
}

export default reducer