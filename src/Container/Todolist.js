import React from 'react'
import Todo from '../Components/Todo'
import { v4 as uuidv4 } from 'uuid'

const Todolist = (props) => {

    const todos = []
    props.todos.forEach((todo) => {
      todos.push(<Todo key={uuidv4()} title={todo.title} description={todo.description}/>)
    })
 
    return (
      <section>
        {todos}
      </section>
    )
  
}

export default Todolist