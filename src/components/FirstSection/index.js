import React, { useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { GetMediaQuery } from '../../utils/hooks'
import {
  ChevronDownIcon,
  EasyIcon,
  FinlandMapIcon,
  HandshakeIcon,
  NoFeesIcon,
  ShieldIcon,
} from '../../utils/icons'
import InfoBox from '../InfoBox'

const FirstSection = () => {
  const [hovered, setHovered] = useState(false)
  const below400 = GetMediaQuery(400)
  useMemo(() => {
    const domElem = document.getElementsByClassName(
      'main-card__map-div__header'
    )[0]
    if (domElem) {
      if (hovered) {
        domElem.style.fontSize = below400 ? '19.8px' : '28px'
        domElem.style.backgroundColor = '#27749F'
        domElem.style.boxShadow = '5px 5px 35px -10px black'
      } else {
        domElem.style.fontSize = '19.8px'
        domElem.style.backgroundColor = 'transparent'
        domElem.style.boxShadow = 'none'
      }
    }
  }, [hovered])

  const navigate = useNavigate()
  const ctaOnClick = () => {
    navigate('/kilpailuta')
  }

  return (
    <section className="main-card-wrapper" id="section1">
      <div className="main-card">
        <div className="main-card__title">
          <h1>KILPAILUTA ALUEESI KIINTEISTÖNVÄLITTÄJÄT</h1>
        </div>
        <div className="main-card__sub-title">
          <h2>
            Löydä vaivattomasti juuri sinun asunnollesi paras
            kiinteistönvälittäjä
          </h2>
        </div>
        <div className="main-card__info-box-div">
          <InfoBox Icon={<HandshakeIcon />} text={'Ilmainen'} />
          <InfoBox Icon={<EasyIcon />} text={'Helppo'} />
          <InfoBox Icon={<NoFeesIcon />} text={'Riskitön'} />
          <InfoBox Icon={<ShieldIcon />} text={'Luotettava'} />
        </div>
        <div className="main-card__paragraph">
          <p>Täytä ilmainen lomake ja säästät rahaa & aikaa</p>
          <p>Alueesi neljä parasta kiinteistönvälittäjää ottavat yhteyttä</p>
        </div>
        <div className="main-card__cta-div">
          <button className="main-card__cta-div__cta" onClick={ctaOnClick}>
            Aloita kilpailuttaminen
          </button>
        </div>
        <div className="main-card__map-div">
          <div className="main-card__map-div__header">
            <h4>Palvelumme on saatavilla kaikkialla Suomessa</h4>
          </div>
          <div style={{ width: 'max-content', margin: '0 auto' }}>
            <FinlandMapIcon hovered={hovered} setHovered={setHovered} />
          </div>
        </div>
      </div>
      <div className="main-card__chevron-down">
        <ChevronDownIcon height={30} width={30} />
      </div>
    </section>
  )
}
export default FirstSection
