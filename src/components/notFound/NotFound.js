import React from 'react'
import Navigation from '../home/Navigation'

const NotFound = () => {
  document.title = "E-Com MERN | Not Found"
  return (
    <div>
      <Navigation />
      404 Not Found!
    </div>
  )
}

export default NotFound
