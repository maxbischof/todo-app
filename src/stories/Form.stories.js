import React from 'react'
import Form from '../Components/Form'

// This default export determines where you story goes in the story list
export default {
  title: 'Form',
  component: 'Form',
}

const Template = (args) => (
  <div style={{ backgroundColor: 'ghostwhite', padding: '50px' }}>
    <Form {...args} />
  </div>
)

export const FormCard = Template.bind({})

FormCard.args = {
  /* the args you need here will depend on your component */
}
