import React, {useState} from 'react'
import axios from 'axios'

//notifications bar
import { toast } from "react-toastify";

import {addPost} from "../redux/actions/actions"

import {useDispatch,useSelector} from "react-redux"

//antd components
import {Row,Col,Button, Input,Form,Select} from 'antd'

const AddPost = () => {
  
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [userId, setUserId] = useState('')
  let [id, setId] = useState(100)

  const dispatch =useDispatch()
  const posts = useSelector(state => state.allPosts.posts)

  let uniqueUserId = [...new Set(posts.map(x => x.userId))]
  
  const changeInTitle = e => setTitle(e.target.value)
  const changeInBody = e => setBody(e.target.value)
  const onChange = (value) => {
    setUserId(`${value}`)
  }

  const {TextArea} = Input

  const { Option } = Select;


  const savePost =  () =>{
    try {
      if(!title | !body | !userId){
        toast("Please provide a title, content and a user")
      }
      else {
        setId(++id)
        fetch('https://jsonplaceholder.typicode.com/posts', {
          method: 'POST',
          body: JSON.stringify({
            title: title,
            body: body,
          userId: userId,
          id:id
        }),
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
        })
          .then((response) => response.json())
          .then((json) => console.log(json));
          
          dispatch(addPost({userId,id,title,body}))
        toast("Post, successfully added")
        setTitle('')
        setBody('')
      }
      
    } catch (error) {
      
    }}
  return (
  

      <Row justify='center'>
      <Col span={12}>
      <h2>Add a New Post</h2>
      <Form>

        <Form.Item label="Title">
          <Input showCount value={title} onChange={changeInTitle} size='large' maxLength={20} 
          placeholder = "Post Title" />
        </Form.Item>

        <Form.Item label="Body">
        <TextArea onChange={changeInBody} value={body} size='large' showCount rows={4} 
        placeholder="Yo! What's on your mind." 
         />
        </Form.Item>

        <Form.Item label="User">
        <Select
          size="large"
          placeholder="Select a user"
          optionFilterProp="children"
          onChange={onChange}
        >
          {uniqueUserId.map(uid => (
          <Option value={uid}>{uid}</Option>
          ))}
        </Select>
        </Form.Item>

        <Row justify='center'>
        <Button type='primary' onClick={savePost}>Save Post</Button>
        </Row>
      </Form>

      </Col>
    </Row>
  )
}

export default AddPost