import React from 'react'

const UserAndPic = (props) => {
  const { user, image } = props

  return(
    <>
      <h1>UserAndPic</h1>
      <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <img style={{marginRight: '1em'}} src={image}/>
        <h3>{user}</h3>
      </div>
    </>
  )
}

export default UserAndPic