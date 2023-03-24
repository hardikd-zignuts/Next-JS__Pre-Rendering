import React from 'react'

const User = ({user}) => {
  return (
    <div>
      <h4>Name: {user.name}</h4>
      <h6>Email: {user.email}</h6>
    </div>
  )
}

export default User
