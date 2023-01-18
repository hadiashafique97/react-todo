import React from 'react'
import { useState, useEffect } from 'react'
import { getTodo, deleteTodo } from '../services/todos-api'
import { useParams, useNavigate } from 'react-router-dom'
function Todo() {
  const {id} = useParams() // destructuring id for use 
  const [todo, setTodo] = useState({}) // setting up our state
  const nav = useNavigate()
  useEffect(()=> {
    getTodo(id) // getting the one ToDo from the api using the id  
  .then(res => setTodo(res.data))}, [])
    
  const deleteTheTodo = () => {
    deleteTodo(id)
    nav('/')
    // the delete function goes here 
    // navigate back to the main screen 

  }


  return (
    <div>
      <h1>Todo:</h1>
      <h3>{todo.description}</h3>
      Completed : <input type='checkbox' defaultChecked={todo.complete}/> <br></br>
      <button onClick={()=>{nav(`/${id}/edit`)}}>Edit</button> <br></br>
      <button onClick={deleteTheTodo}>Delete</button>
      <button onClick={()=>{nav(`/`)}}>Main</button>
      
    </div>
  )
}

export default Todo




