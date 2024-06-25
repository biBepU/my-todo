/* eslint-disable no-unused-vars */
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
import CheckTodo from './components/CheckTodo'
import FilterTodo from './components/FilterTodo';
import ClearTodo from './components/ClearTodo';

import './App.css';
import { useCallback, useEffect, useState } from 'react';

function App() {
  const [todos,setTodos] = useState([]);
  const [filterTodo,setFilterTodo] = useState(todos)

  useEffect(()=>{
    fetch('http://localhost:8000/todos')
    .then(res=>res.json())
    .then((todos)=>{
      setTodos(todos);
      setFilterTodo(todos)
    })
    
  },[]);
  
const filterBy =useCallback((filter)=>{
  if (filter==="All"){
    setFilterTodo(todos);
  }
  if (filter==="Active"){
    setFilterTodo(todos.filter(t=>!t.completed))
  }
  if (filter==="Completed"){
    setFilterTodo(todos.filter(t=>t.completed))
  }
},[todos])

  const addTodo = (todo)=>{
// client 
  setTodos(prevState=>[...prevState,todo])


// server
    fetch('http://localhost:8000/todos',{
      method: "POST", 
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(todo),
    });
 
  };

  const deleteTodo =(id)=>{

   // server

   fetch(`http://localhost:8000/todos/${id}`,{
    method: "DELETE", 

  });

    // client
  
    setTodos(prevState=>{
      return prevState.filter((d)=>{
        return d.id!==id;
    })
   })

 

  }
const updateTodo =(todo)=>{
  
  //server
  fetch(`http://localhost:8000/todos/${todo.id}`,{
    method: "PATCH", 
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(todo),
  });



  //client
  setTodos(prevState =>{
    return prevState.map((t)=>{
    if(t.id === todo.id){
      return todo;
    }
    return t;
  })
 })
}

let remaingCount = todos.filter(t=>!t.completed).length;

const checkAll =()=>{
  //server
  todos.forEach(t=>{
    t.completed = true;
  updateTodo(t)

  })


  //client
  setTodos(prevState=>{
    return prevState.map(t=>{
      return {...t,completed:true}
    })
  })
  
}

const clearCompleted =()=>{
  //server
  todos.forEach(t=>{
   if(t.completed){
    deleteTodo(t.id)
   }

  })



  //client
  setTodos(prevState=>{
    return prevState.filter(t=>!t.completed)
 })


}


  return (
    <div className="todo-app-container">
      <div className="todo-app">
        <h2>ToDo APP</h2>
      <TodoForm addTodo={addTodo}/>

      <TodoList todos={filterTodo} deleteTodo={deleteTodo} updateTodo={updateTodo}/>

    <CheckTodo remaingCount={remaingCount} checkAll={checkAll}/>

        <div className="other-buttons-container">
        <FilterTodo filterBy={filterBy}/>
         <ClearTodo clearCompleted={clearCompleted}/>
        </div>
      </div>
    </div>
  );
}

export default App;