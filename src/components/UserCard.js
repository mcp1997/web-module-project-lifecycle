import React from 'react'

export default function UserCard(props) {

  const { avatar, fullname, bio, url } = props

  return (
    <div className='user'>
      <h3>Your beautiful self:</h3>
      <div className='usercard'>
        <img src={avatar} width='200' />
        <div>
          <h4>{fullname}</h4>
          <p className='bio'>{bio}</p>
          <p>See full profile <a className='cardlink' href={url}>here</a>!</p>
        </div>
      </div>
      <h3>All of your wonderful followers:</h3>
    </div>
  )
}