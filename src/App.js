import React, { Component } from 'react'
import './App.css'
import Todolist from './Container/Todolist'
import Form from './Components/Form'

class App extends Component {
  state = {
    todos: [
      {title: "Eis kaufen", description: "ganz wichtig!", done: false},
      {title: "Neue Fische Hausaufgaben", description: "React Intro", done: false}
    ]
  }

  addTodo = ({title, description}) => {
    this.setState(state => {
      const todosArray = state.todos.concat({title})
      return (todosArray)
    })
    this.state.todos.push({title: title, description, done: false})
  }

  render() {
    return (
      <div className="App">
        <h1>Todo's App</h1>
        <Form add={this.addTodo}/>
        <Todolist todos={this.state.todos}/>
      </div>
    )
  }
}

export default App
