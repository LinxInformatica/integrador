import { ADD_FAV, REMOVE_FAV } from "./action-types";

const initialState = {
  myFavorites: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAV:
      return {
        ...state,
        myFavorites: [...state.myFavorites, action.payload]
      }
    case REMOVE_FAV:
      return {
        ...state,
        myFavorites: state.myFavorites.filter((myFavorite) => myFavorite !== parseInt(action.payload)),
      }
    default:
      return { ...state }
  }
}
