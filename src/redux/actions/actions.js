
import { ActionTypes } from "../constants/action-types"

export const setPosts = (posts) => {
  return {
    type: ActionTypes.SET_POSTS,
    payload: posts,
  }
}

export const addUser = ({rider,tier,savings,id}) => {
  console.log(rider)
  return {
    type: ActionTypes.ADD_USER,
    payload: {rider,tier,savings,id}
  }
}

// export const selectedPost = (post) => {
//   return {
//     type: ActionTypes.SELECTED_POST,
//     payload: post
//   }
// }

// export const removeSelectedPost = (post) => {
//   return {
//     type: ActionTypes.REMOVE_SELECTED_POST,
//   }
// }

