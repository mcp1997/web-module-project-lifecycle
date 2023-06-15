import React from 'react'

export default class Todo extends React.Component {
  render() {
    return (
      <div>
        <h4 onClick={() => this.props.handleComplete(this.props.todo.id)} className={this.props.todo.completed ? 'todo completed' : 'todo'}>{this.props.todo.name}</h4>
      </div>
    )
  }
}
