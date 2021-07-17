import React from 'react'

const Link = ({ texto }) => {
  return (
    <>
      <div className="link">
        <a href="/">{texto}</a>
      </div>
    </>
  )
}
export default Link
