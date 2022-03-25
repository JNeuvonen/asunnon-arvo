import React from 'react'

const InfoBox = ({ Icon, text }) => {
  return (
    <div className="main-card__info-box-div__info-box">
      <div className="main-card__info-box-div__info-box__div">
        {Icon}
        <span className="main-card__info-box-div__info-box__text">{text}</span>
      </div>
    </div>
  )
}
export default InfoBox
