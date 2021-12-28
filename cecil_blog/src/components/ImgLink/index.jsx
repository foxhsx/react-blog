import React from 'react'
import { Link } from 'react-router-dom'

const ImgLink = ({
  path,
  icon,
  text,
}) => (
  <>
    <Link className='nav-link' to={path}>
      { icon && <img className="nav-icon" src={icon} alt="" /> }
      <span>{ text }</span>
    </Link>
  </>
)

export default ImgLink;
