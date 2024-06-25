import React from 'react'

export default function ClearTodo({clearCompleted}) {

  return (
    <div>
         <div>
            <button className="button" onClick={clearCompleted}>Clear completed</button>
          </div>
    </div>
  )
}
