import React, { Component } from "react"

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
      <form onSubmit={this.handleSubmit}>
        <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
          <input
            className="mdl-textfield__input"
            type="text"
            id="todo_title"
            onChange={this.handleChange}
          ></input>
          <label className="mdl-textfield__label" htmlFor="todo_title">
            Title
          </label>
        </div>

        {/* <label>
          Todo Title:
          <input type="text" name="title" onChange={this.handleChange} />
        </label> */}
        <input type="submit" value="Submit" />
      </form>
    )
  }
}

export default Form
