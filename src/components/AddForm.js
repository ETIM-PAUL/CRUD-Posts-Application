import React, {useState,useEffect} from 'react'

//notifications bar
import { toast } from "react-toastify";

import {addUser} from "../redux/actions/actions"

import {useDispatch,useSelector} from "react-redux"

//antd components
import {Row,Col,Button, Input,Form,Select} from 'antd'

const AddRider = () => {
  
  const [rider, setRider] = useState('')
  const [tier, setTier] = useState('')
  const [savings, setSavings] = useState()
  const [interest, setInterest] = useState()
  let [id, setId] = useState(1)

  const dispatch =useDispatch()
  const users = useSelector(state => state.allUsers.users)

  
  const changeInRider = e => setRider(e.target.value)
  const onChange = (value) => {
    if(value==="tier1"){

      setSavings(10000)
      setInterest(7);

    }if(value==="tier2"){
      setInterest(15);
      setSavings(15000)

    }if(value==="tier3"){
      setInterest(25);
      setSavings(20000)
    }
    setTier(value)
  }

  const { Option } = Select;

  const saveRider =  () =>{
    try {
      if(!rider | !tier){
        toast("Please provide a rider and his tier level")
      }
      else {
          dispatch(addUser({tier,id,savings,rider}))
        toast("Post, successfully added")
        setRider('')
        setTier('')
      }
      
    } catch (error) {
      
    }}
  return (
  

      <Row justify='center'>
      <Col span={12}>
      <h2>Add a New User</h2>
      <Form>

        <Form.Item label="Title">
          <Input showCount value={rider} onChange={changeInRider} size='large' maxLength={100} 
          placeholder = "Rider's Full Name" />
        </Form.Item>


        <Form.Item label="User">
        <Select
          size="large"
          placeholder="Select a Tier level"
          optionFilterProp="children"
          onChange={onChange}
          >
          <Option value="tier1">Tier 1</Option>
          <Option value="tier2">Tier 2</Option>
          <Option value="tier3">Tier 3</Option>
        </Select>
        </Form.Item>
          {/* <Form.Item label="Returns">
          <TextArea size='large' showCount rows={4} readOnly
           >kkkkkkkk</TextArea>
          </Form.Item> */}
          {savings !== undefined &&
          <p>You will be making a weekly savings of &#8358;{savings}, With an interest rate of {interest}%. You will recieve a weekly payment of {(Math.round((interest / 100) * savings))+(savings)}</p>
          }

        <Row justify='center'>
        <Button type='primary' onClick={saveRider}>Save Rider's Details</Button>
        </Row>
      </Form>

      </Col>
    </Row>
  )
}

export default AddRider