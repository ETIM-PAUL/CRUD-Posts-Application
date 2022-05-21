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
  const [initialSavings, setInitialSavings] = useState()
  const [interest, setInterest] = useState()
  let id = Math.random().toString(36).slice(2)

  const dispatch =useDispatch()

  
  const changeInRider = e => setRider(e.target.value)
  const onChange = (value) => {
    if(value==="tier1"){

      setSavings(10000)
      setInitialSavings(10000)
      setInterest(7);

    }if(value==="tier2"){
      setInterest(15);
      setSavings(15000)
      setInitialSavings(15000)

    }if(value==="tier3"){
      setInterest(25);
      setSavings(20000)
      setInitialSavings(20000)
    }
    setTier(value)
  }

  const { Option } = Select;

  let weeklyGain = (Math.round((interest / 100) * savings))+(savings)
  const saveRider =  () =>{
    try {
      if(!rider | !tier){
        toast("Please provide a rider and his tier level")
      }
      else {
          dispatch(addUser({tier,id,savings,rider,weeklyGain,initialSavings}))
        toast("Post, successfully added")
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
          {savings !== undefined &&
          <p>You will be making a weekly savings of &#8358;{savings}, With an interest rate of {interest}%. You will recieve a weekly payment of {weeklyGain}</p>
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