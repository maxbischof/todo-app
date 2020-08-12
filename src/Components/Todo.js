import React from 'react'
import './Todo.css'

const Todo = ({title, description}) => (
  <article className="todo">
    <input className="todo_checkbox" type="checkbox" />
    <h3 className="todo_title">{title}</h3>
    <p className="todo_description">{description}</p>
  </article>
)

export default Todo