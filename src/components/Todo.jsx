/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react'


export default function Todo({todo,deleteTodo,updateTodo}) {
    const [isEdit,setIsEdit] = useState(false)
    const [title,setTitle] = useState(todo.title)
    const updateTodoHandler =(e)=>{
      e.preventDefault();
      let updatedTodo ={
        id:todo.id,
        title,
        completed :todo.completed
      }
      updateTodo(updatedTodo)
      setIsEdit(false)
    }
    const deleteButton =(id)=>{
        console.log(id)
        deleteTodo(id)
      }
      const handleOnchange =()=>{
        let updatedTodo ={
          id:todo.id,
          title,
          completed :!todo.completed
        }
        updateTodo(updatedTodo)
        
      }
  return (
    <div>
          <li className="todo-item-container">
          <div className="todo-item">
            <input type="checkbox" checked={todo.completed}  onChange={handleOnchange}/>
           {
            !isEdit && 
            <span onDoubleClick={()=>setIsEdit(true)} className={`todo-item-label ${todo.completed==true ? 'line-through': ''}`}>
            {todo.title}
           </span>
           }
           <form  onSubmit={updateTodoHandler}>
             {isEdit && <input type="text" className="todo-item-input" value={title} onChange={(e)=>setTitle(e.target.value)} /> }
             </form>
          </div>
          <button className="x-button" onClick={()=>deleteButton(todo.id)}>
            <svg
              className="x-button-icon"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </li>
    </div>
  )
}
