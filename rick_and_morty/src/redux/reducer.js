import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "./action-types";
import { CHARACTERGENDER } from "../helpers/character.helpers";

const initialState = {
  myFavorites: [],
  allCharacters: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAV:
      return {
        ...state,
        myFavorites: [...state.myFavorites, action.payload],
        allCharacters: [...state.allCharacters, action.payload]
      }
    case REMOVE_FAV:
      return {
        ...state,
        myFavorites: state.myFavorites.filter((myFavorite) => myFavorite.id !== parseInt(action.payload)),
        allCharacters: state.allCharacters.filter((char) => char.id !== parseInt(action.payload))
      }
    case FILTER:
      return {
        ...state,
        myFavorites: action.payload === CHARACTERGENDER.ALL ? [...state.allCharacters]
                                                            : [...state.allCharacters].filter((char) => char.gender === action.payload)
      }
    case ORDER:
      switch (action.payload) {
        case 'A':
          return {
            ...state,
            myFavorites: [...state.myFavorites].sort((a, b) => a.id - b.id),
          }
        case 'D':
          return {
            ...state,
            myFavorites: [...state.myFavorites].sort((a, b) => b.id - a.id),
          }

        default:
          return {
            ...state
          }
      }
    default:
      return { ...state }
  }
}
