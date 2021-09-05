import React from 'react'
import ImgAvatar from '../assets/avatar.png'
import IconeNivel from '../components/IconeNivel'
const Avatar = ({ text }) => {
  return (
    <>
      <div className="avatar">
        <div className="imgContainer">
          <img src={ImgAvatar} className="imgAvatar" />
          <IconeNivel numero={3} />
        </div>
        <span>{text}</span>
      </div>
    </>
  )
}

export default Avatar
