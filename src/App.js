import React from 'react'
import './App.css'
import Todo from './Components/Todo'
import Form from './Components/Form'

function App() {
  return (
    <div className="App">
      <Form/>
      <Todo title="Eis kaufen" description="ganz wichtig!"></Todo>
      <Todo title="Neue Fische Hausaufgaben" description="React Intro"></Todo>
    </div>
  )
}

export default App
