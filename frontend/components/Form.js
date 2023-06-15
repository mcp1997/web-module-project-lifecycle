import React from 'react'

export default class Form extends React.Component {
  constructor() {
    super()
    this.state = {
      newTask: ''
    }
  }

  handleChange = e => {
    this.setState({
      ...this.state,
      newTask: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    console.log('submitted')
    this.props.handleAdd(this.state.newTask)
    this.setState({
      ...this.state,
      newTask: ''
    })
  }

  handleClick = e => {
    e.preventDefault()
    console.log('cleared')
    this.props.handleClear()
  }

  render() {
    return (
      <div>
        <form>
          <input type='text' placeholder='Enter To-Do item' onChange={this.handleChange} value={this.state.newTask}></input>
          <button onClick={this.handleSubmit}>Add Todo</button>
          <button onClick={this.handleClick}>Clear Completed</button>
        </form>
      </div>
    )
  }
}
