import React, { useState } from "react"
import "./Form.css"

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
    <form onSubmit={handleSubmit} className="form">
      <h3>Add new todo</h3>
      <div className="form_input">
        <label htmlFor="title">Title</label>
        <input
          id="title"
          type="text"
          name="title"
          onChange={handleTitleChange}
          className="form_input_field"
        />
      </div>

      <div className="form_input">
        <label htmlFor="description">Description</label>
        <input
          id="description"
          type="text"
          name="description"
          onChange={handleDescriptionChange}
          className="form_input_field"
        />
      </div>

      <button className="form_btn" type="submit" value="Submit">
        Add todo
      </button>
    </form>
  )
}

export default Form
