import React, { useState } from 'react'

const Q2 = () => {
    const[count,setcount]=useState(0)
  return (
    <>
    <h1>{count}</h1>
    <button type='submit' onClick={()=>{setcount(count+1)}}>Increment</button>
    <button type='submit' onClick={()=>{setcount(count-1)}}>Decrement</button>
    <button type='submit' onClick={()=>{setcount(0)}}>Reset</button>
    </>
  )
}

export default Q2