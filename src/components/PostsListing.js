import React,{useState, useEffect} from 'react'

import { useDispatch } from "react-redux";
import { useSelector } from 'react-redux'
import {Link} from 'react-router-dom'

import { Divider, Button, Row,Col , Space, Popconfirm} from 'antd'

import AddPost from './AddForm';

const PostsList = () => {

  //redux hooks
  const users = useSelector(state => state.allUsers.users)
  const dispatch = useDispatch();

    useEffect(() => {
      // getPosts()
    }, [])


  return (
    <>
    <AddPost/>
    <Divider/>

    <Row justify='center' style={{paddingTop:'30px'}}>
      <Col span={12} >
        <h1 style={{textAlign:'center'}}><u>Users</u></h1>
        {users.map(post => (
          <div key={post.id}>
            <article className="post-excerpt" >
              <h3> {post.title} </h3>
       <Divider/>

        <h4 style={{paddingLeft:'10px'}}>{post.savings.substring(0, 100)}</h4>
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
          >
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