import React from "react"
import Todo from "../Components/Todo"

const Todolist = (props) => {
  const todos = []
  props.todos.forEach((todo) => {
    todos.push(
      <Todo
        key={todo.title}
        title={todo.title}
        description={todo.description}
        done={todo.done}
      />
    )
  })

  return <section>{todos}</section>
}

export default Todolist
