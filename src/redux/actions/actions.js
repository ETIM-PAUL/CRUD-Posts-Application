
import { ActionTypes } from "../constants/action-types"

export const setPosts = (posts) => {
  return {
    type: ActionTypes.SET_POSTS,
    payload: posts,
  }
}

export const addUser = ({rider,tier,savings,id,weeklyGain,initialSavings}) => {
  console.log(rider,tier,savings,id,weeklyGain,initialSavings)
  return {
    type: ActionTypes.ADD_USER,
    payload: {rider,tier,savings,id,weeklyGain,initialSavings}
  }
}

export const increaseSavings = (id,savings) => {
  return {
    type: ActionTypes.INCREASE_SAVINGS,
    payload: {id,savings}
  }
}

// export const removeSelectedPost = (post) => {
//   return {
//     type: ActionTypes.REMOVE_SELECTED_POST,
//   }
// }

