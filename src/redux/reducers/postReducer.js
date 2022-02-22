import { ActionTypes } from "../constants/action-types"

const initialState = {
  posts:[]
}
export const postReducer = (state=initialState, {type,payload}) => {
  switch (type) {
    case ActionTypes.SET_POSTS:
      return {...state, posts:payload};
    case ActionTypes.ADD_POST:
      return {
        ...state,
        posts: [...state.posts, payload]
      }
    case ActionTypes.EDIT_POST:
      return {
        posts: state.posts.map(post => {
          return (post.id === payload.id ? payload : post)
        })
      }

      case ActionTypes.DELETE_POST:
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

export const selectedPostReducer = (state={}, {type,payload}) => {
  switch (type) {
    case ActionTypes.SELECTED_POST:
      return {...state, ...payload};
    case ActionTypes.REMOVE_SELECTED_POST:
      return {};
    default:
      return state;
  }
}
