import React from "react"
import Todo from "../Components/Todo"
import styled from 'styled-components'

const Todolist = ({ todos, deleteTodo, changeDone }) => {
  const sortedTodos = todos.sort((a,b) => a.done - b.done)
  return <List>
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
  </List>
}

export default Todolist

const List = styled.section`
  border-top-left-radius:  20px;
  border-top-right-radius:  20px;
  background-color: white;
  place-items: center;
  width: 100%`
