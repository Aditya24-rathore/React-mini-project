import React, { useState } from 'react'

const Q3 = () => {
     const[color,setcolor]=useState("white")
  return (
    <>
    <div style={{height:"200px",width:"200px",backgroundColor:color,border:"1px solid black"}}></div>
    <button onClick={()=>{setcolor("red")}}>Red</button>
    <button onClick={()=>{setcolor("green")}}>Green</button>
    </>
  )
}

export default Q3