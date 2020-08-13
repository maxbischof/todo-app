import React from 'react'
import { render } from '@testing-library/react'
import Todo from './Todo'

test('Renders todo card with title and description', () => {
  const { getByText } = render(
    <Todo title="Test title" description="Test Description" />
  )
  const title = getByText(/Test title/)
  expect(title).toBeInTheDocument()

  const description = getByText(/Test Description/)
  expect(description).toBeInTheDocument()
})

test('Todos has global text color (black) when checkbox is unchecked', () => {
  render(
    <div>
      <Todo title="Test Title" description="Test Description" done={false} />
    </div>
  )

  const todoClass = Todo({
    title: 'Test Title',
    description: 'Test Description',
    done: false,
  }).type.styledComponentId

  const todoRoots = document.getElementsByClassName(todoClass)
  const style = window.getComputedStyle(todoRoots[0])
  expect(style.color).toBe('')
})

test('Todos textcolor is grey when checkbox is checked', () => {
  render(
    <div>
      <Todo title="Test Title" description="Test Description" done={true} />
    </div>
  )

  const todoClass = Todo({
    title: 'Test Title',
    description: 'Test Description',
    done: true,
  }).type.styledComponentId

  const todoRoots = document.getElementsByClassName(todoClass)
  const style = window.getComputedStyle(todoRoots[0])
  expect(style.color).toBe('rgb(158, 158, 158)')
})
