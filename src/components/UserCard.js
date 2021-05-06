import React from 'react'

export default function UserCard(props) {

  const { avatar, name, bio, url } = props

  return (
    <div className='user'>
      <h3>Your awesome self:</h3>
      <div className='usercard'>
        <img src={avatar} width='200' />
        <div>
          <h4>{name}</h4>
          <p className='bio'>{bio}</p>
          <p>See full profile <a className='cardlink' href={url}>here</a>!</p>
        </div>
      </div>
      <h3>All of your equally-awesome followers:</h3>
    </div>
  )
}