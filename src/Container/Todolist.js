import React, { Component } from 'react'
import Todo from '../Components/Todo'

class Todolist extends Component {
  state = {
    todos: [
      {title: "Eis kaufen", description: "ganz wichtig!"},
      {title: "Neue Fische Hausaufgaben", description: "React Intro"}
    ]
  }

  render () {
    const todos = []
    this.state.todos.forEach((todo) => {
      todos.push(<Todo title={todo.title} description={todo.description}/>)
    })
 
    return (
      <section>
        {todos}
      </section>
    )
  }
}

export default Todolist