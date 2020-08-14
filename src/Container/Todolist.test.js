import React from 'react'
import { render } from '@testing-library/react'
import { screen } from '@testing-library/dom'
import Todolist from './Todolist'

test('Sorts undone todos on top of list', () => {
  const todos = [
    {title: "Eis kaufen1", description: "ganz wichtig!", done: true},
    {title: "Eis kaufen2", description: "React Intro", done: false},
    {title: "Eis kaufen3", description: "Nicht zu viel", done: true},
    {title: "Eis kaufen4", description: "Extra lecker", done: false},
  ]

  render(
    <Todolist todos={todos}/>
  )

  const renderedTodos = screen.getAllByText(/Eis kaufen/i)

  expect(renderedTodos[0].textContent).toBe('Eis kaufen2')
  expect(renderedTodos[1].textContent).toBe('Eis kaufen4')
})