import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
const ScrollNav = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const onClick = (e, id) => {
    if (location.pathname === '/kilpailuta') {
      e.preventDefault()
      navigate('/')
      setTimeout(function () {
        document.getElementById(id).scrollIntoView()
      }, 100)
    } else {
      e.preventDefault()
      document.getElementById(id).scrollIntoView()
    }
  }
  return (
    <div className="scroll-nav">
      <span
        className="scroll-nav__link"
        onClick={(e) => {
          onClick(e, 'section1')
        }}
      >
        Etusivu
      </span>
      <span
        className="scroll-nav__link"
        onClick={(e) => {
          onClick(e, 'section2')
        }}
      >
        Miten?
      </span>
      <span
        className="scroll-nav__link"
        onClick={(e) => {
          onClick(e, 'section3')
        }}
      >
        Miksi?
      </span>
      <span
        className="scroll-nav__link"
        onClick={(e) => {
          onClick(e, 'section4')
        }}
      >
        FAQ
      </span>
    </div>
  )
}
export default ScrollNav
