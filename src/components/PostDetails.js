import React, {useEffect} from 'react'
import axios from 'axios'
import {useParams,Link} from "react-router-dom"
import { selectedPost,removeSelectedPost } from '../redux/actions/actions'
import { useDispatch,useSelector } from 'react-redux'
import {Row,Col,Divider,Button} from 'antd'

const PostDetails = () => {
  const post = useSelector((state) => state.post)
  const {title,userId,body,id} = post
  const {postid} =useParams();
  console.log("type id", typeof postid)
  const p = useSelector((state) => state.allPosts.posts.filter(x => x.id === Number(postid))[0])
  console.log("found post", p)
  const dispatch = useDispatch();
  console.log(post)

  const fetchPostDetail = async() => {
    try {
      const response = await axios
      .get(`https://jsonplaceholder.typicode.com/posts/${postid}`)
      .then((response) => (response.data))
      dispatch(selectedPost(response))
      
    } catch (error) {
      console.log(error)
    }
  }


  useEffect(() => {
    if (postid && postid !== "") fetchPostDetail() 
    return () => {
      dispatch(removeSelectedPost())
    }
  }, [postid])
  

  return (
    <>
    <Link to={"/"}>
    <Button 
      style={{justifyContent:'center', 
      marginTop:'9px', 
      marginLeft:'9px'}} 
      type='primary'>
        Home
        </Button>
    </Link>
    
    {Object.keys(post).length === 0 && p ? (
      // <div>...Loading</div>
      <Row justify='center' style={{paddingTop:'30px'}}>
        <Col span={8} >
        <article className="post-excerpt">
        <h3> {p.title} </h3>
        <Divider/>
          <h4 style={{paddingLeft:'10px'}}>{p.body}</h4>
          <Divider/>
          <h4 style={{textAlign:'center'}}>Posted by user {p.userId}</h4>
          </article>
        </Col>
      </Row>
    ) : ( 
    <Row justify='center' style={{paddingTop:'30px'}}>
      <Col span={8} >
      <article className="post-excerpt">
       <h3> {title} </h3>
       <Divider/>
        <h4 style={{paddingLeft:'10px'}}>{body}</h4>
        <Divider/>
        <h4 style={{textAlign:'center'}}>Posted by user {userId}</h4>
        </article>
      </Col>
    </Row>
    )}
    </>
  )
}

export default PostDetails