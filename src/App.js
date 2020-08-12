import React, { useState } from 'react'
import './App.css'
import Todolist from './Container/Todolist'
import Form from './Components/Form'

function App () {
  const startTodos = [
      {title: "Eis kaufen", description: "ganz wichtig!", done: false},
      {title: "Neue Fische Hausaufgaben", description: "React Intro", done: true}
    ]
  const [todos, setTodos] = useState(startTodos)
  
  const addTodo = ({title, description, done}) => {
    setTodos([...todos, {title, description, done}]
  )}

    return (
      <div className="App">
        <h1>Todo's App</h1>
        <Form add={addTodo}/>
        <Todolist todos={todos} />
      </div>
    )
}

export default App
