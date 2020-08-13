import React, { useState } from "react"
import styled from 'styled-components'

function Form({ add }) {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")

  function handleSubmit(event) {
    add({ title: title, description: description, done: false })
    event.preventDefault()
  }

  function handleTitleChange(event) {
    setTitle(event.target.value)
  }

  function handleDescriptionChange(event) {
    setDescription(event.target.value)
  }

  return (
    <StyledForm onSubmit={handleSubmit}>
      <Headline>Add new todo</Headline>
      <Input>
        <Label htmlFor="title">Title</Label>
        <InputField
          id="title"
          type="text"
          name="title"
          onChange={handleTitleChange}
        />
      </Input>

      <Input>
        <Label htmlFor="description">Description</Label>
        <InputField
          id="description"
          type="text"
          name="description"
          onChange={handleDescriptionChange}
        />
      </Input>

      <Button type="submit" value="Submit">
        Add todo
      </Button>
    </StyledForm>
  )
}

export default Form

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px 20px 20px 20px;
  margin: 0 0 20px 0;
  background-color: white;
  border-radius: 20px;`

const Button = styled.button`
text-decoration: none;
color: #fff;
background-color: #26a69a;
text-align: center;
border: none;
border-radius: 2px;
height: 36px;
line-height: 36px;
padding: 0 16px;
margin: 20px 0px 0px 0px;
text-transform: uppercase;
text-align: center;`

const InputField = styled.input`
  background-color: transparent;
  border: none;
  border-bottom-color: currentcolor;
  border-bottom-style: none;
  border-bottom-width: medium;
  border-bottom: 1px solid #9e9e9e;
  border-radius: 0;
  outline: none;
  width: 100%;
  font-size: 16px;
  padding: 0;
  height: 40px;`

const Input  = styled.div`
  position: relative;
  margin-bottom: 15px;
  height: 40px;`

const Label = styled.label`
  position: absolute;
  bottom: -17px;
  left: 2px;
  color: #9e9e9e;
  font-size: 14px;`

const Headline = styled.h3`
  margin: 0 0 10px 0;`