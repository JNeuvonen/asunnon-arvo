import React, { useEffect, useState } from 'react'
import { CloseIcon } from '../../utils/icons'
import { useNavigate, useLocation } from 'react-router-dom'
const Nav = () => {
  const location = useLocation()
  const [navOpen, setNavOpen] = useState(false)
  const [showHamburger, setShowHamburger] = useState(true)
  const activatedMenuItem =
    location.pathname === '/'
      ? 'Etusivu'
      : location.pathname === '/kilpailuta'
      ? 'Kilpailuta'
      : 'Usein Kysyttyä'
  const navigate = useNavigate()
  const menuItems = ['Etusivu', 'Kilpailuta']

  const menuOnClick = () => {
    const navOpen = document.getElementsByClassName('nav-open')[0]
    const navContent = document.getElementsByClassName('nav-open__content')[0]
    navOpen.style.width = '100%'
    setShowHamburger(false)
    setTimeout(function () {
      navContent.style.fontSize = '30px'
      setNavOpen(true)
    }, 500)
  }

  const menuOnClose = () => {
    const navOpen = document.getElementsByClassName('nav-open')[0]
    const navContent = document.getElementsByClassName('nav-open__content')[0]
    navOpen.style.width = '0%'
    navContent.style.fontSize = '0px'
    navContent.style.color = 'white'
    setNavOpen(false)
    setTimeout(function () {
      setShowHamburger(true)
    }, 500)
  }

  const menuItemOnClick = (item) => {
    if (item === 'Etusivu') {
      navigate('/')
    }

    if (item === 'Kilpailuta') {
      navigate('/kilpailuta')
    }
  }

  return (
    <React.Fragment>
      <nav>
        <div className="nav-open">
          <div className="nav-open__content">
            {menuItems.map((item) => {
              return (
                <span
                  key={item}
                  style={
                    item === activatedMenuItem
                      ? { textDecoration: 'underline', borderRadius: '5px' }
                      : null
                  }
                  onClick={(e) => {
                    menuItemOnClick(item)
                  }}
                >
                  {item}
                </span>
              )
            })}
          </div>
          {navOpen && (
            <div className="menu-close-icon" onClick={menuOnClose}>
              <CloseIcon fill={'white'} />
            </div>
          )}
        </div>

        {showHamburger && (
          <div className="menu-icon">
            <svg
              fill="white"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 30 30"
              width="30px"
              height="30px"
              onClick={menuOnClick}
            >
              <path d="M 3 7 A 1.0001 1.0001 0 1 0 3 9 L 27 9 A 1.0001 1.0001 0 1 0 27 7 L 3 7 z M 3 14 A 1.0001 1.0001 0 1 0 3 16 L 27 16 A 1.0001 1.0001 0 1 0 27 14 L 3 14 z M 3 21 A 1.0001 1.0001 0 1 0 3 23 L 27 23 A 1.0001 1.0001 0 1 0 27 21 L 3 21 z" />
            </svg>
          </div>
        )}
      </nav>
    </React.Fragment>
  )
}
export default Nav
