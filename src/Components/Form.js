import React, { Component } from "react"
import "./Form.css"

class Form extends Component {
  constructor(props) {
    super(props)
    this.state = { value: "" }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(event) {
    this.props.add({ title: this.state.value })
    event.preventDefault()
  }

  handleChange(event) {
    this.setState({ value: event.target.value })
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
            onChange={this.handleChange}
            className="form_input_field"
          />
        </div>

        <div className="form_input">
          <label htmlFor="description">Description</label>
          <input
            id="description"
            type="text"
            name="description"
            onChange={this.handleChange}
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
