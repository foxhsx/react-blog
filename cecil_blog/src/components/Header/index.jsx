import React from 'react'
import ImgLink from '../ImgLink';

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
          navList.map(n => {
            if (!!n.children) {
              return (
                <div className="dropdown-wrapper">
                  <button className="dropdown-title">
                    <span>{n.text}</span>
                    <span className="icon-arrow"></span>
                  </button>
                  <ul className="nav-dropdown">
                    {
                      n.children.map(c => (
                        <li className="nav-item">
                          <ImgLink path={c.path} text={c.text} />
                        </li>
                      ))
                    }
                  </ul>
                </div>
              )
            } else {
              return (
                <div className='nav-item'>
                  <ImgLink path={n.path} text={n.text} />
                </div>
              )
            }
          })
        }
      </nav>
    </header>
  )
}

export default Header
