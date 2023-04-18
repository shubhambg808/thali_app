import React, { useState,useEffect } from 'react'
import {useDispatch, useSelector } from 'react-redux'


const CheckOut = () => {
  const [total,setTotal]=useState()
  const dispatch=useDispatch();
  const myStore=useSelector(state=>state.storeSlice.checkOutCart)

  useEffect(()=>{
    setTotal(myStore.reduce((accu,ele)=>accu+=ele.price*ele.quantity,0))
  },[total])

  return (
    <div style={{textAlign:"center"}}>
        <table style={{width:"70%",margin:"0 0 0 200px"}} >
            <thead style={{ boxShadow:'2px 2px 4px 2px grey',borderRadius:"20px"}}>
              <tr   >
                <th>Product</th>
                <th>Dishes</th>
                <th>Quantity</th>
                <th>Total</th>
              </tr>
            </thead>
          <tbody style={{color:"blueviolet",fontSize:"18px",}}>
            {myStore.map((ele,ind)=>(
              <tr key={ind} style={{borderRadius:"20px", boxShadow:'2px 2px 4px 2px grey',}}>
                <td style={{display:"flex",alignItems:"center"}}><img style={{height:"100px",width:"100px",borderRadius:"20px"}} src={ele.img}/> <p style={{margin:"0 0 0 100px"}}>{  ele.title} </p> </td>
                <td>{ele.price}</td>
                <td>{ele.quantity}</td>
                <td>{ele.quantity*ele.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <h1>Your Thali is Ready with  Just Rs  : {total}/- only</h1>
    </div>
  )
}

export default CheckOut;