import React from 'react'
import axios from 'axios'
import Form from './Form'
import TodoList from './TodoList'

const URL = 'http://localhost:9000/api/todos'

export default class App extends React.Component {
  constructor() {
    console.log('constructor invoked!')
    super()
    this.state = {
      todos: []
    }
  }

  componentDidMount() {
    console.log('CDM invoked!')
    axios.get(URL)
      .then(res => {
        this.setState({
          ...this.state,
          todos: res.data.data
        })
      })
      .catch(err => console.log(err))
  }

  handleAdd = newTask => {
    const newTodo = {
      name: newTask,
      completed: false
    }

    axios.post(URL, newTodo)
      .then(res => {
        this.setState({
          ...this.state,
          todos: [
            ...this.state.todos,
            res.data.data
          ]
        })
      })
      .catch(err => console.log(err))
  }

  handleComplete = clickedID => {
    axios.patch(`${URL}/${clickedID}`)
      .then(res => {
        this.setState({
          ...this.state,
          todos: this.state.todos.map(todo => {
            if(todo.id === res.data.data.id) {
              return res.data.data
            } else {
              return todo
            }
          })
        })
      })
      .catch(err => console.log(err))
  }

  handleClear = () => {
    this.setState({
      ...this.state,
      todos: this.state.todos.filter(todo => todo.completed === false)
    })
  }

  render() {
    console.log('render invoked!')
    return (
      <div>
        <TodoList todos={this.state.todos} handleComplete={this.handleComplete} />
        <Form todos={this.state.todos} handleAdd={this.handleAdd} handleClear={this.handleClear} />
      </div>
    )
  }
}
