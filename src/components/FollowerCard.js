import React from 'react'

export default function FollowerCard(props) {

  const { avatar, url } = props

  return (
    <div className='followercard'>
      <img src={avatar} width='200' />
      <p className='link'>See full profile <a className='cardlink' href={url}>here</a>!</p>
    </div>
  )
}