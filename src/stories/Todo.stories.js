import React from 'react'
import Todo from '../Components/Todo'

// This default export determines where you story goes in the story list
export default {
  title: 'Todo',
  component: 'Todo',
}

const Template = (args) => (
  <div style={{ backgroundColor: 'ghostwhite', padding: '50px' }}>
    <Todo {...args} />
  </div>
)

export const TodoCard = Template.bind({})

TodoCard.args = {
  done: false,
  title: 'Buy coffee',
  description: 'The tasty one',
}
