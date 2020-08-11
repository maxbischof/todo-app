import React, { Component } from 'react'
import './App.css'
import Todolist from './Container/Todolist'
import Form from './Components/Form'

class App extends Component {
  state = {
    todos: [
      {title: "Eis kaufen", description: "ganz wichtig!"},
      {title: "Neue Fische Hausaufgaben", description: "React Intro"}
    ]
  }

  addTodo = ({title, description}) => {
    this.setState(state => {
      const todosArray = state.todos.concat({title})
      return (todosArray)
    })
    this.state.todos.push({title: title, description})
  }

  render() {
    return (
      <div className="App">
        <Form add={this.addTodo}/>
        <Todolist todos={this.state.todos}/>
      </div>
    )
  }
}

export default App
