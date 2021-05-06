import React, { Component } from 'react'
import axios from 'axios'
import './App.css';

import Header from './components/Header'
import UserCard from './components/UserCard'
import FollowerCard from './components/FollowerCard'

class App extends Component {
  // constructor function and state
  constructor() {
    super()
    this.state = {
      renderBoolean: false,
      userCard: '',
      followerCard: [],
      username: '',
    }
  }

  // event handlers
  handleChanges = e => {
    this.setState({
      username: e.target.value,
    })
  }

  fetchUser = e => {
    e.preventDefault()
    axios.get(`https://api.github.com/users/${this.state.username}`)
      .then( res => {
        this.setState({
          renderBoolean: true,
          userCard: res.data,
        })
      })
      .catch( err => {
        console.log(err)
      })
    
    axios.get(`https://api.github.com/users/${this.state.username}/followers`)
      .then( res => {
        this.setState({
          renderBoolean: true,
          followerCard: res.data,
        })
      })
      .catch( err => {
        console.log(err)
      })
    
    this.setState({
      username: '',
    })
  }

  // render
  render() {
    return (
      <div className='App'>
        <Header
          username={this.state.username}
          handleChanges={this.handleChanges}
          fetchUser={this.fetchUser}
        />

        {
          this.state.renderBoolean &&
          <UserCard
            avatar={this.state.userCard.avatar_url}
            name={this.state.userCard.name}
            bio={this.state.userCard.bio}
            url={this.state.userCard.html_url}
          />
        }
        <div className='follower-container'>
          {
            this.state.renderBoolean &&
            this.state.followerCard.length === 0
              ? <div>You don't have any followers :(</div>
              : this.state.followerCard.map(follower => {
                return (
                  <FollowerCard
                    avatar={follower.avatar_url}
                    url={follower.html_url}
                  />
                )
              })
          }
        </div>
      </div>
    )
  }
}

export default App;
