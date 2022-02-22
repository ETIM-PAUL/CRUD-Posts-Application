import axios from "axios"
import { useDispatch } from "react-redux";
import {setPosts} from "./redux/actions/actions"
const dispatch = useDispatch;

export const getPosts = async () => {
  const posts = await axios
  .get("https://jsonplaceholder.typicode.com/posts")
  .then((posts) => (posts.data))
  .catch((err) => {
    console.log("ERR -", err);
  })
  dispatch(setPosts(posts));
  console.log("posts")
}