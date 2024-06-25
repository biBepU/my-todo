/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react'

export default function TodoForm({addTodo}) {
    const [title,setTitle] =useState('');
    const randomNumberInRange = (min, max) => Math.random() * (max - min) + min;
   

    const handleSubmit =(e)=>{
        e.preventDefault();

     
        let todo = {
            title,
            id :  Math.floor(randomNumberInRange(0, 50)).toString(),
            completed : false
        }
        addTodo(todo)
        setTitle('')
    }
  return (
    <div>
        
        <form action="#" onSubmit={handleSubmit}>
          <input
            type="text"
            className="todo-input"
            placeholder="What do you need to do?"
            value={title}
            onChange={(e)=>setTitle(e.target.value)}
          />
        </form>
    </div>
  )
}
