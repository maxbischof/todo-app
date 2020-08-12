import React, { Component } from 'react'
import './App.css'
import Todolist from './Container/Todolist'
import Form from './Components/Form'

class App extends Component {
  state = {
    todos: [
      {title: "Eis kaufen", description: "ganz wichtig!", done: false},
      {title: "Neue Fische Hausaufgaben", description: "React Intro", done: true}
    ]
  }

  addTodo = ({title, description, done}) => {
    this.setState({
      todos: [...this.state.todos, {title, description, done}]
  })}

  // setDone = (index) => {

  // }

  render() {
    return (
      <div className="App">
        <h1>Todo's App</h1>
        <Form add={this.addTodo}/>
        <Todolist todos={this.state.todos} />
      </div>
    )
  }
}

export default App
