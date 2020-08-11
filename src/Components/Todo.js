import React from 'react'

const Todo = ({title, description}) => (
  <article>
    <h2>{title}</h2>
    <p>{description}</p>
  </article>
)

export default Todo