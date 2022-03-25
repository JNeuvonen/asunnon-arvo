import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import FourthSection from '../../components/FourthSection'
import MainCard from '../../components/FirstSection'
import ScrollNav from '../../components/ScrollNav'
import SecondSection from '../../components/SecondSection'
import ThirdSection from '../../components/ThirdSection'
import Dispatchers from '../../utils/dispatchers'
import { ListenToScroll } from '../../utils/functions'
const Landing = () => {
  const navigate = useNavigate()
  const [showCta, setShowCta] = useState(false)
  const [ctaMoved, setCtaMoved] = useState(false)
  const { promocode } = useParams()
  const { updatePromoCode } = Dispatchers()
  useEffect(() => {
    const updateScrollListener = () => {
      ListenToScroll(showCta, setShowCta, ctaMoved, setCtaMoved)
    }
    if (promocode) {
      updatePromoCode(promocode)
    }
    window.addEventListener('scroll', updateScrollListener)

    return () => window.removeEventListener('scroll', updateScrollListener)
  })

  const ctaOnClick = () => {
    navigate('/kilpailuta')
  }
  return (
    <React.Fragment>
      <ScrollNav />
      <MainCard />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <div className="persistent-cta">
        <button className="main-card__cta-div__cta" onClick={ctaOnClick}>
          Aloita kilpailuttaminen
        </button>
      </div>
    </React.Fragment>
  )
}
export default Landing
