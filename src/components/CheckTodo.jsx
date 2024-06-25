import React from 'react'

export default function CheckTodo({remaingCount , checkAll}) {
  
  return (
    <div>
            <div className="check-all-container">
          <div>
            <div className="button" onClick={checkAll}>Check All</div>
          </div>

          <span>{remaingCount} item{remaingCount>0 ?'s':''} remaining</span>
        </div>
    </div>
  )
}
