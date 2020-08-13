import React, { useState } from 'react'
import Todolist from './Container/Todolist'
import Form from './Components/Form'
import styled from 'styled-components'

function App () {
  const startTodos = [
      {title: "Eis kaufen", description: "ganz wichtig!", done: false},
      {title: "Neue Fische Hausaufgaben", description: "React Intro", done: true}
    ]
  const [todos, setTodos] = useState(startTodos)
  
  const addTodo = ({title, description, done}) => {
    setTodos([...todos, {title, description, done}]
  )}

  const deleteTodo = (index) => {
    const newTodos = [...todos]
    newTodos.splice(index,1)
    setTodos([...newTodos])
  }

  const changeDone = (index) => {
    const newTodos = [...todos]
    newTodos[index].done = !newTodos[index].done
    setTodos([...newTodos])
  }

    return (
      <Div>
        <Header>
          <Headline>Todo's App</Headline>
          <Line />
        </Header>
        <Form add={addTodo}/>
        <Todolist todos={todos} deleteTodo={deleteTodo} changeDone={changeDone}/>
      </Div>
    )
}

export default App

const Div = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #1d3557;`

const Headline = styled.h1`
  color: white;
  font-size: 20px;`

const Header = styled.header`
  width: 80%;
  margin: 0 0 10px 0;`



const Line = styled.hr`
  color: gainsboro;
  margin: 0 0 10px 0;`