import React from "react"
import Todo from "../Components/Todo"

const Todolist = ({ todos, deleteTodo, changeDone }) => {
  const sortedTodos = todos.sort((a,b) => a.done - b.done)
  return <section>
    {sortedTodos.map((todo, index) => 
    <Todo
    key={todo.title}
    title={todo.title}
    description={todo.description}
    done={todo.done}
    deleteTodo={deleteTodo}
    index={index}
    changeDone={changeDone}
  />)}
  </section>
}

export default Todolist
