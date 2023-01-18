import axios from 'axios'

const baseURL = 'http://localhost:3001/todos' // phone number to our express server this is what tells the server what ip address our express (back-end) is connecting to 

// Show All 
export const getTodos = () =>{
    const URL = baseURL // our base url 
    const response = axios.get(URL) //using axios get functionality to grab our todos
    return response
}

// show one 
export const getTodo = (id) =>{
    const URL = `${baseURL}/${id}`
    const response = axios.get(URL) 
    return response
}

//edit our todos 
export const editTodo = (id, updatedTodo) =>{
    const URL = `${baseURL}/${id}`
    const response = axios.put(URL, updatedTodo)
    return response
}


//create the Todo
export const createTodo = (todo) =>{
const URL = baseURL
const response = axios.post(URL, todo)
return response 
}

//Delete the Todo
export const deleteTodo = (id) => {
    const URL = `${baseURL}/${id}`
    const response = axios.delete(URL)
    return response
}