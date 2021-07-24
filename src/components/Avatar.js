import React from 'react'
import ImgAvatar from '../assets/avatar.png'

const Avatar = ({ text }) => {
  return (
    <>
      <div className="avatar">
        <img src={ImgAvatar} className="imgAvatar"></img>
        <span>{text}</span>
      </div>
    </>
  )
}

export default Avatar
