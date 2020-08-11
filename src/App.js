import React from 'react'
import './App.css'
import Todolist from './Container/Todolist'
import Form from './Components/Form'

function App() {
  return (
    <div className="App">
      <Form/>
      <Todolist/>
    </div>
  )
}

export default App
