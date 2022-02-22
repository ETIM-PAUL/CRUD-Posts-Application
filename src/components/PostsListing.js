import React,{useState, useEffect} from 'react'

import axios from "axios"
import { useDispatch } from "react-redux";
import {setPosts,deletePost} from "../redux/actions/actions"
import { useSelector } from 'react-redux'
import {Link} from 'react-router-dom'

import { Divider, Button, Row,Col , Space, Popconfirm} from 'antd'

import AddPost from './AddForm';

const PostsList = () => {

  //redux hooks
  const posts = useSelector(state => state.allPosts.posts)
  const dispatch = useDispatch();

  //fetching data function
  const getPosts = async () => {
    const response = await axios
    .get("https://jsonplaceholder.typicode.com/posts")
    .then((response) => (response.data))
    .catch((err) => {
      console.log("ERR -", err);
    })
    dispatch(setPosts(response));
  }

  const onDelete =  (post_id) => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${post_id}`, {
    method: 'DELETE',
  })
    dispatch(deletePost(post_id))
    console.log('deleted')
  }
    useEffect(() => {
      getPosts()
    }, [])


  return (
    <>
    <AddPost/>
    <Divider/>

    <Row justify='center' style={{paddingTop:'30px'}}>
      <Col span={12} >
        <h1 style={{textAlign:'center'}}><u>Posts</u></h1>
        {posts.map(post => (
          <div key={post.id}>
            <article className="post-excerpt" >
              <h3> {post.title} </h3>
       <Divider/>

        <h4 style={{paddingLeft:'10px'}}>{post.body.substring(0, 100)}</h4>
        <Divider/>

        <h4 style={{textAlign:'center'}}>Posted by user {post.userId}</h4>
          <div style={{paddingLeft:'20px', paddingBottom:'15px'}} >
          <Space type='vertical'>
            <Link to={`/post/edit/${post.id}`}>
              <Button type='primary'>Edit Post</Button>
            </Link>
            <Link to={`/post/${post.id}`}>
              <Button type='primary'>View Post</Button>
            </Link>
      
        <Popconfirm 
          placement='top' 
          title='Are you sure you want to delete this task' 
          onConfirm={() => onDelete(post.id)}>
          <Button type='primary'>Delete Post</Button>
        </Popconfirm>
      
        </Space>
      </div>
      </article>
      <br/><br/>
     </div>
     ))}
      </Col>
    </Row>
   
    </>
  )
}

export default PostsList