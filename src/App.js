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

  const deleteTodo = (index) => {
    const newTodos = [...todos]
    newTodos.splice(index,1)
    setTodos([...newTodos])
  }

  const changeDone = (index) => {
    const newTodos = [...todos]
    newTodos[index].done = !newTodos[index].done
    setTodos([...newTodos])
  }

    return (
      <div className="App">
        <h1>Todo's App</h1>
        <Form add={addTodo}/>
        <Todolist todos={todos} deleteTodo={deleteTodo} changeDone={changeDone}/>
      </div>
    )
}

export default App
