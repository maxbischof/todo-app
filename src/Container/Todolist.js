import React, { Component } from 'react'
import Todo from '../Components/Todo'

class Todolist extends Component {
  // state = {

  // }

  render () {
    return (
      <section className="todolist">
        <Todo title="Eis kaufen" description="ganz wichtig!"></Todo>
        <Todo title="Neue Fische Hausaufgaben" description="React Intro"></Todo>
      </section>
    )
  }
}

export default Todolist