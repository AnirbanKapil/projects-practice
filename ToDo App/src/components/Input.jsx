
import React, { useState } from 'react'

function Input() {
  
  
  const [task,setTask] = useState("");
  const [todo,setTodo] = useState([]);
  

  function handleEvent (event) {
     setTask(event.target.value)
      
  }
  
  function handleButton () {
       setTodo((preV)=>{
          return [...preV , task]
       });
       setTask("")
  }
  

  return (
    <>
    <div>
    <div className="flex flex-wrap justify-center">
        <div className= "">
      <label>
        <input className='w-[600px] rounded-lg text-black' value={task} placeholder='Task' type='text' 
        onChange={handleEvent} />
      </label>
        </div>
      <button className='text-white bg-blue-600 px-4 mx-4  rounded-lg' onClick={handleButton}>
        Add</button>
      </div>  
    </div>
    <div className='flex justify-center'>
      <div className='w-2/3 bg-gray-300 mt-10 h-screen text-center'>
        <ul>
          {todo.map((item)=><li key={item}>{item}</li>)}
        </ul>
      </div>
    </div>
    </>
  )
}

export default Input