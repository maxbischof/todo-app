import React from "react"
import "./Todo.css"

const Todo = ({ title, description, done, deleteTodo, index, changeDone }) => (
  <article className={done ? "todo todo-done" : "todo"}>
    <input
      className="todo_checkbox"
      type="checkbox"
      defaultChecked={done}
      onChange={() => changeDone(index)}
    />
    <h3 className="todo_title">{title}</h3>
    <p className="todo_description">{description}</p>
    <span className="todo_delete" onClick={() => deleteTodo(index)}>Delete</span>
  </article>
)

export default Todo
