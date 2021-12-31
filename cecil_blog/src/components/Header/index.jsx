import React, { Fragment } from 'react'
import ImgLink from '../ImgLink';
import './index.scss'

const Header = ({
  title,
  logo,
  navList
}) => {
  return (
    <header className="blog-header">
      <ImgLink
        path="/"
        icon={logo}
        text={title}
      />
      <nav className="blog-nav">
        {
          navList.map(n => (
            <Fragment key={n.text}>
              {
                !!n.children ?
                  <div className="dropdown-wrapper">
                    <button className="dropdown-title">
                      <span>{n.text}</span>
                      <span className="icon-arrow"></span>
                    </button>
                    <ul className="nav-dropdown">
                      {
                        n.children.map(c => (
                          <li className="nav-item" key={c.path}>
                            <ImgLink path={c.path} text={c.text} />
                          </li>
                        ))
                      }
                    </ul>
                  </div>
                  :
                  <div className='nav-item'>
                    <ImgLink path={n.path} text={n.text} />
                  </div>
              }
            </Fragment>
          ))
        }
      </nav>
    </header>
  )
}

export default Header
