import React from 'react'
import { Link } from 'react-router-dom'

const Links = () => {
  return (
    <div>
        <Link to={'/Home'}></Link>
        <Link to={'/Login'}></Link>
        <Link to={'/Register'}></Link>
    </div>
  )
}

export default Links