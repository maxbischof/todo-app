import React, { Component } from "react"
import "./Form.css"

class Form extends Component {
  constructor(props) {
    super(props)
    this.state = { title: "", description: "" }
    this.handleTitleChange = this.handleTitleChange.bind(this)
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(event) {
    this.props.add({
      title: this.state.title,
      description: this.state.description,
      done: false,
    })
    event.preventDefault()
  }

  handleTitleChange(event) {
    this.setState({ title: event.target.value })
  }

  handleDescriptionChange(event) {
    this.setState({ description: event.target.value })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="form">
        <div className="form_input">
          <label htmlFor="title">Title</label>
          <input
            id="title"
            type="text"
            name="title"
            onChange={this.handleTitleChange}
            className="form_input_field"
          />
        </div>

        <div className="form_input">
          <label htmlFor="description">Description</label>
          <input
            id="description"
            type="text"
            name="description"
            onChange={this.handleDescriptionChange}
            className="form_input_field"
          />
        </div>

        <button className="form_btn" type="submit" value="Submit">
          Add todo
        </button>
      </form>
    )
  }
}

export default Form
