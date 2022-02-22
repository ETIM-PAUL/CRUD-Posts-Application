
import { ActionTypes } from "../constants/action-types"

export const setPosts = (posts) => {
  return {
    type: ActionTypes.SET_POSTS,
    payload: posts,
  }
}

export const addPost = ({title,userId,body,id}) => {
  return {
    type: ActionTypes.ADD_POST,
    payload: {title,userId,body,id}
  }
}

export const editedPost = ({userId,id,title,body}) => {
  return {
    type: ActionTypes.EDIT_POST,
    payload: {userId,id,title,body}
  }
}

export const deletePost = (id) => ({
  type: ActionTypes.DELETE_POST,
  payload:id,
})

export const selectedPost = (post) => {
  return {
    type: ActionTypes.SELECTED_POST,
    payload: post
  }
}

export const removeSelectedPost = (post) => {
  return {
    type: ActionTypes.REMOVE_SELECTED_POST,
  }
}

