
import React, { useState } from 'react'

function Input() {

  const [list,setList] = useState("")

  return (
    <>
    <div>
    <div className="flex flex-wrap justify-center">
        <div className= "">
      <label>
        <input className='w-[600px]' value={list} placeholder='Task' type='text' />
      </label>
        </div>
      <button className='text-white bg-blue-600 px-4 mx-4'>Add</button>
      </div>  
    </div>
    </>
  )
}

export default Input