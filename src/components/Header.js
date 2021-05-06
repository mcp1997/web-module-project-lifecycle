import React from 'react'

export default function Header(props) {

  const { username, handleChanges, fetchUser } = props

  return (
    <div className='header'>
      <h1>Your personal Github User Card</h1>
      <h2>Enter your Github username below to see your User Card as well as your followers!</h2>
      <form onSubmit={fetchUser}>
        <input
          type='text'
          placeholder='enter GitHub username'
          value={username}
          onChange={handleChanges}
        />
        <button>Fetch User Card!</button>
      </form>
    </div>
  )
}