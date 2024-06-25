/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import Todo from './Todo'

export default function TodoList({todos,deleteTodo,updateTodo}) {
  
  return (
    <div>
        <ul className="todo-list">
       {
        todos && todos.map((todo)=>(
             
        <Todo todo={todo} key={todo.id} deleteTodo={deleteTodo} updateTodo={updateTodo}/>
        ))
       }
         
        </ul>
    </div>
  )
}
