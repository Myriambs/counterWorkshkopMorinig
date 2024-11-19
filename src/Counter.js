import React, { useState } from 'react'
import { useSelector , useDispatch } from 'react-redux'
import {increment,decrement,reset} from './redux/counterSlice'
const Counter = () => {
 
  const {counter}=useSelector(state=>state.counter)
  console.log('counter mil redux',counter)

const dispatch =useDispatch()



  return (
    <div>   <div className="counter-container">
    <h1 id="counter"> {counter} </h1>
    <button id="increment-btn" onClick={()=>dispatch(increment())}     >Increment</button>
    <button id="decrement-btn" onClick={()=>dispatch(decrement())}     >Decrement</button>
    <button id="reset-btn"  onClick={()=>dispatch(reset())}       >Reset</button>
</div></div>
  )
}

export default Counter