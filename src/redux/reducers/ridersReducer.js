import { ActionTypes } from "../constants/action-types"

const initialState = {
  users:localStorage.getItem("riders")
    ? JSON.parse(localStorage.getItem("riders"))
    : [],
}
export const savingsReducer = (state=initialState, {type,payload}) => {
  switch (type) {
    // case ActionTypes.SET_SAVINGS:
    //   return {...state, posts:payload};
    case ActionTypes.ADD_USER:
      return {
        ...state,
        users: [...state.users, payload]
      }
      
      case ActionTypes.CLOSE_ACCOUNT:
        console.log(typeof payload)
        return {
          posts: [
            ...state.posts.filter(post => post.id !== payload)
          ]
        }
        default:
          return state;
        }
      }

