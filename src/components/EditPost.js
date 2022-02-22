import React, {useEffect,useState} from 'react'
import axios from 'axios'
import {useParams,Link} from "react-router-dom"
// import { selectedPost } from '../redux/actions/actions'
import { useDispatch,useSelector } from 'react-redux'
import {Row,Col,Divider,Input,Select,Form,Button} from 'antd'
import { toast } from 'react-toastify'
import { editedPost } from '../redux/actions/actions'

  const EditDetails = () => {
  const dispatch = useDispatch();

  const {postid} =useParams();
  const p = useSelector((state) => state.allPosts.posts.filter(x => x.id === Number(postid))[0])
  const {title,userId,body,id} = p
  const posts = useSelector((state) => state.allPosts.posts)
  let uniqueUserId = [...new Set(posts.map(x => x.userId))]
  
  
  const [prevtitle, setTitle] = useState(title)
  // const [pid, setId] = useState(id)
  const [prevbody, setBody] = useState(body)
  const [prevuserId, setUserId] = useState(userId)

  
  const changeInTitle = e => setTitle(e.target.value)
  const changeInBody = e => setBody(e.target.value)
  const changeInUser = e => setUserId(e.target.value)

  const {TextArea} = Input

  const { Option } = Select;

  const onChange = (value) => {
    console.log(`selected ${value}`);
    setUserId(`${value}`)
  }

  const editPost =   () =>{
    try {
      if(!title || !body || !userId){
        toast("Please provide a title, a content and a user")
      }
      else {
        try {
          fetch('https://jsonplaceholder.typicode.com/posts/1', {
              method: 'PUT',
              body: JSON.stringify({
                id: id,
                title: prevtitle,
                body: prevbody,
                userId: prevuserId,
              }),
              headers: {
                'Content-type': 'application/json; charset=UTF-8',
              },
            })
            .then((response) => response.json())
            .then((json) => console.log(json));
            dispatch(editedPost({
              userId: prevuserId,
              id,
              title: prevtitle,
              body: prevbody
            }))
            console.log(prevuserId,prevbody,prevtitle)
              toast("Post, successfully edited")
        }
        catch (err){
          console.log(err)
        }
      }
      
    } catch (error) {
      
    }}

  // useEffect(() => {
  //   if (postid && postid !== "") fetchPostDetail() 
  // }, [postid])
  

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
    <Row justify='center'>
      <Col span={12}>
      <h2>Edit Post</h2>
      <Form>

        <Form.Item label="Title">
          <Input showCount onChange={changeInTitle} value={prevtitle} size='large' 
          placeholder = "Post Title" />
        </Form.Item>

        <Form.Item label="Body">
        <TextArea onChange={changeInBody} value={prevbody} size='large' showCount rows={4} 
        placeholder="Yo! What's on your mind." 
        maxLength={80} />
        </Form.Item>

        <Form.Item label="User">
        <Select
          size="large"
          placeholder="Select a person"
          optionFilterProp="children"
          onChange={onChange}
          filterOption={(input, option) =>
            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
        }
        >
          {uniqueUserId.map(uid => (
          <Option value={uid} >{uid}</Option>))}
        </Select>
        </Form.Item>

        <Row justify='center'>
        <Button type='primary' onClick={editPost}>Edit Post</Button>
        </Row>
      </Form>

      </Col>
    </Row>
   
    <Row justify='center' style={{paddingTop:'70px'}}>
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
    
    </>
  )
}

export default EditDetails