import React,{useState, useEffect} from 'react'

import { useSelector, useDispatch } from 'react-redux'

import { Divider, Button, Row,Col , Space, Popconfirm} from 'antd'
import {increaseSavings} from "../redux/actions/actions"


import AddPost from './AddForm';

const PostsList = () => {

  const dispatch =useDispatch()

  const users = useSelector(state => state.allUsers.users)
  let totalAmount = users.map(user => user.savings)
  const sum = totalAmount.reduce((partialSum, a) => partialSum + a, 0);

  const increaseAmount = (id,savings) => {
    dispatch(increaseSavings(id,savings))
  }

  return (
    <>
    <AddPost/>
    <Divider/>

    <Row justify='center' style={{paddingTop:'30px'}}>
      <Col span={12} >
        <h3>
        Total Money Collected From Members:<b> {sum}</b></h3>
        {users.map(rider => (
          <div key={rider.id}>
            <article className="post-excerpt" >
              <h3> Rider's Name: {rider.rider} </h3>
              <button onClick = {() => increaseAmount(rider.id,rider.savings)}>Add another weekly payment</button>
       <Divider/>

        <h6 style={{paddingLeft:'10px'}}>{rider.initialSavings} ~ weekly payment</h6>
        <h6 style={{paddingLeft:'10px'}}>{rider.weeklyGain} ~ weekly payout</h6>
        <h6>Total Money Saved: {rider.savings}</h6>
        <Divider/>

        <h4>Rider's Tier: {rider.tier}</h4>

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