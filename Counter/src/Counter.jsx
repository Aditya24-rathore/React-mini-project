import React from 'react'
import { useState } from 'react'

const Counter = () => {
    let[count,setcount]=useState("0")
  return (
    <>
   <h1>{count}</h1>
   <button onClick={()=>{setcount(count+1)}}>Increment</button>
   <button onClick={()=>{setcount(count-1)}}>Decrement</button>
   <button onClick={()=>{setcount(0)}}>Reset</button>
   </>
  )
}

export default Counter