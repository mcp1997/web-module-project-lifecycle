import React from 'react'
import Todo from './Todo'

export default class TodoList extends React.Component {
  render() {
    return (
      <div>
        {this.props.todos.map(todo => <Todo todo={todo} key={todo.id} handleComplete={this.props.handleComplete} />)}
      </div>
    )
  }
}
