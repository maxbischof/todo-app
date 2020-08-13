import React from 'react'
import styled from 'styled-components'

const Todo = ({ title, description, done, deleteTodo, index, changeDone }) => {
  return <Article done={done}>
      <Checkbox
        type="checkbox"
        defaultChecked={done}
        onChange={() => changeDone(index)}
      />
      <Title>{title}</Title>
      <Description>{description}</Description>
      <DeleteAction onClick={() => deleteTodo(index)}>
        Delete
      </DeleteAction>
    </Article>
}

const Article = styled.article`
    display: grid;
    grid-template-columns: 40px 1fr;
    grid-template-rows: 1fr 1fr;
    margin: 20px 20px 0 20px;
    background-color: #fff;
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
      0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);
    padding: 0px 10px 0px 10px;
    border-radius: 10px;
    ${props => props.done ? 'color: #9e9e9e;' : ''}
  `

  const Checkbox = styled.input`
    grid-column: 1/2;
    padding: 0;
    margin: 15px 0px 0px 10px;
  `

  const Title = styled.h3`
    padding: 15px 0px 0px 15px;
    margin: 0;
    grid-column: 2/3;
    word-break: break-word;
  `

  const Description = styled.p`
    padding: 0px 0px 0px 15px;
    margin: 0;
    grid-column: 2/3;
  `

  const DeleteAction = styled.span`
    grid-column: 2/3;
    color: #e63946;
    font-size: 13px;
    cursor: pointer;
    padding: 0px 0px 5px 15px;
  `

export default Todo
