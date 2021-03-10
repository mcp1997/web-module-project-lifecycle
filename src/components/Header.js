import React from 'react'

export default function Header(props) {
  
  const { username, change, submit } = props
  
  return (
    <div className='header'>
      <h1>Your Github User Card ft. your followers!</h1>
      <h2>Enter your Github username below to see your's and your follower's user cards!</h2>
      <form onSubmit={submit}>
        <input type='text' value={username} onChange={change} placeholder='enter Github username' />
        <button>Fetch User Cards</button>
      </form>
    </div>
  )
}