import React from 'react'
import { useState } from 'react'

const Q1 = () => {
    const[name,setname]=useState("")
  return (
    
    <>
    <form action="">
        <h1>{name}</h1>
    Enter name:<input type="text" value={name} onChange={(e)=>{setname(e.target.value)}}/> <br /> <br />
    </form>
    </>
  )
}

export default Q1