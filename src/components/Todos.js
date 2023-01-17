import Todo from "./Todo";
import { getTodos } from "../services/todos-api";
import { useState, useEffect } from 'react'
import Create from "./CreateTodo";



// this is where we are expecting or getting stuff back from our backend 

export default function Todos() {
    const [todos, setTodos] = useState([])
    useEffect(()=> {
        getTodos()
        .then(res => setTodos(res.data))
    }, [])
    console.log(todos)
    return (

        <div>
            All of the Todos
            <ul>
            {todos.map((todo) => {
                return (
                    <li><a href={`/${todo._id}`}>{todo.description}</a></li>)
            })}
            </ul>
            <Create/>
        </div>
    )
}