import React from 'react'
import {
  GoalIcon,
  MoneyIcon,
  PrizeIcon,
  TechnologyIcon,
  ThumbsUpIcon,
  TimeIcon,
} from '../../utils/icons'
import FlipCard from '../Flip-Card'
const WhyUse = () => {
  return (
    <div className="third-section__content">
      <h2 className="third-section__content__why-use">
        Miksi kiinteistönvälittäjien kilpailuttaminen kannattaa?
      </h2>
      <div className="third-section__content__reason-grid">
        <FlipCard
          front={
            <div className="third-section__content__reason-grid__reason">
              <div className="third-section__content__reason-grid__reason__flex-wrapper">
                <TimeIcon />
                <h3 className="third-section__content__reason-grid__reason__title">
                  Säästät aikaa
                </h3>
              </div>

              <div className="third-section__content__reason-grid__reason__paragraph">
                Miksi soitella useammille kiinteistönvälittäjille? Teemme työn
                puolestasi.
              </div>
            </div>
          }
          back={
            <React.Fragment>
              <div className="flip-card-back__header">
                <div className="flip-card-back__header__content">
                  <ThumbsUpIcon />
                  <h6 style={{ marginLeft: 10 }}>Teemme työtä teille</h6>
                </div>
              </div>
              <div className="flip-card-back__paragraph">
                Entiset kiinteistönvälittäjät etsivät teille teidän tilanteeseen
                sopivimman kiinteistönvälittäjän.
              </div>
            </React.Fragment>
          }
        />

        <FlipCard
          front={
            <div className="third-section__content__reason-grid__reason">
              <div className="third-section__content__reason-grid__reason__flex-wrapper">
                <MoneyIcon />
                <h3 className="third-section__content__reason-grid__reason__title">
                  Parempi tarjous
                </h3>
              </div>

              <div className="third-section__content__reason-grid__reason__paragraph">
                Meidän tarjoama välittäjien kilpailutus tehostaa asunnon myyjän
                asemaa neuvotteluissa.
              </div>
            </div>
          }
          back={
            <React.Fragment>
              <div className="flip-card-back__header">
                <div className="flip-card-back__header__content">
                  <TechnologyIcon />
                  <h6 style={{ marginLeft: 10 }}>Hyödynnä teknologiaa</h6>
                </div>
              </div>
              <div className="flip-card-back__paragraph">
                Käytämme välitysliikkeiden tietoja selvittääksemme alueesi
                parhaimmat välittäjät.
              </div>
            </React.Fragment>
          }
        />

        <FlipCard
          front={
            <div className="third-section__content__reason-grid__reason">
              <div className="third-section__content__reason-grid__reason__flex-wrapper">
                <GoalIcon />
                <h3 className="third-section__content__reason-grid__reason__title">
                  Tehokasta
                </h3>
              </div>

              <div className="third-section__content__reason-grid__reason__paragraph">
                Kiinteistöalan asiantuntijoina osaamme yhdistää sinut alueesi
                parhaimpiin välittäjiin.
              </div>
            </div>
          }
          back={
            <React.Fragment>
              <div className="flip-card-back__header">
                <div className="flip-card-back__header__content">
                  <PrizeIcon />
                  <h6 style={{ marginLeft: 10 }}>Kaikki Voittavat</h6>
                </div>
              </div>
              <div className="flip-card-back__paragraph">
                Te löydätte vaivattomasti alueenne parhaimmat välittäjät ja
                ammattitaitoiset välittäjät löytävät teidät.
              </div>
            </React.Fragment>
          }
        />
      </div>
    </div>
  )
}
export default WhyUse
