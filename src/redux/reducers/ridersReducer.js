import { ActionTypes } from "../constants/action-types"

const initialState = {
  users:[],
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
      case ActionTypes.INCREASE_SAVINGS:
        const user =  state.users.findIndex(user => user.id === payload.id)
        const savings =  state.users.filter(user => user.id === payload.id)
        let riderSavings = savings[0].initialSavings
        state.users[user].savings = (riderSavings+payload.savings)
        return {
          ...state,
          users: [...state.users]
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

