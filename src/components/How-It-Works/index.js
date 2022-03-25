import React from 'react'
import { GetMediaQuery } from '../../utils/hooks'
import { CheckIcon, PhoneIcon, WebIcon, WriteIcon } from '../../utils/icons'
const HowItWorks = () => {
  const below850 = GetMediaQuery(850)
  return (
    <div className="second-section__how-it-works">
      <div className="second-section__how-it-works__card">
        <div className="second-section__how-it-works__card-div">
          {below850 ? (
            <div className="second-section__how-it-works__mobile-card">
              <h4 className="second-section__how-it-works__card__title">
                Täytä lomake
              </h4>
              <WriteIcon />
            </div>
          ) : (
            <h4 className="second-section__how-it-works__card__title">
              Täytä lomake
            </h4>
          )}
          <p>
            Syötä asuntosi tiedot ja kerro kiinteistönvälittäjään liittyvät
            toiveesi
          </p>

          <div
            style={{ marginTop: 20 }}
            className="second-section__how-it-works__card__flex-wrapper"
          >
            <div>
              <CheckIcon height={40} width={40} />
            </div>
            <div className="second-section__how-it-works__card__flex-wrapper__p">
              <p>Ilmainen</p>
            </div>
          </div>
          <div className="second-section__how-it-works__card__flex-wrapper">
            <div>
              <CheckIcon height={40} width={40} />
            </div>
            <div className="second-section__how-it-works__card__flex-wrapper__p">
              <p>Ei sitoumuksia</p>
            </div>
          </div>
          <div className="second-section__how-it-works__card__flex-wrapper">
            <div>
              <CheckIcon height={40} width={40} />
            </div>
            <div className="second-section__how-it-works__card__flex-wrapper__p">
              <p>Tietosi ovat meille luottamuksellisia</p>
            </div>
          </div>
        </div>

        {below850 ? null : <WriteIcon />}
      </div>

      {below850 ? (
        <div className="second-section__how-it-works__card">
          <div className="second-section__how-it-works__card-div">
            <div className="second-section__how-it-works__mobile-card">
              <h4 className="second-section__how-it-works__card__title">
                Kilpailutamme välittäjiä
              </h4>
              <WebIcon />
            </div>
            <p>
              Hyödynnämme laajaa kiinteistönvälittäjien verkostoamme
              löytääksemme tarpeisiinne sopivimman kiinteistönvälittäjän
            </p>

            <div
              style={{ marginTop: 20 }}
              className="second-section__how-it-works__card__flex-wrapper"
            >
              <div>
                <CheckIcon height={40} width={40} />
              </div>
              <div className="second-section__how-it-works__card__flex-wrapper__p">
                Vain alueesi asiantuntijoita
              </div>
            </div>
            <div className="second-section__how-it-works__card__flex-wrapper">
              <div>
                <CheckIcon height={40} width={40} />
              </div>

              <div className="second-section__how-it-works__card__flex-wrapper__p">
                <p>Tarpeisiinne räätälöity välittäjä</p>
              </div>
            </div>
            <div className="second-section__how-it-works__card__flex-wrapper">
              <div>
                <CheckIcon height={40} width={40} />
              </div>
              <div className="second-section__how-it-works__card__flex-wrapper__p">
                <p>Tarjoamme useampia vaihtoehtoja</p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="second-section__how-it-works__card">
          <WebIcon />
          <div className="second-section__how-it-works__card-div">
            <h4 className="second-section__how-it-works__card__title">
              Kilpailutamme välittäjiä
            </h4>

            <p>
              Hyödynnämme laajaa kiinteistönvälittäjien verkostoamme
              löytääksemme tarpeisiinne sopivimman kiinteistönvälittäjän
            </p>

            <div
              style={{ marginTop: 20 }}
              className="second-section__how-it-works__card__flex-wrapper"
            >
              <div className="">
                <CheckIcon height={40} width={40} />
              </div>
              <div className="second-section__how-it-works__card__flex-wrapper__p">
                <p>Vain alueesi asiantuntijoita</p>
              </div>
            </div>
            <div className="second-section__how-it-works__card__flex-wrapper">
              <div className="">
                <CheckIcon height={40} width={40} />
              </div>
              <div className="second-section__how-it-works__card__flex-wrapper__p">
                <p>Tarpeisiinne räätälöity välittäjä</p>
              </div>
            </div>
            <div className="second-section__how-it-works__card__flex-wrapper">
              <div className="">
                <CheckIcon height={40} width={40} />
              </div>
              <div className="second-section__how-it-works__card__flex-wrapper__p">
                <p>Tarjoamme useampia vaihtoehtoja</p>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="second-section__how-it-works__card">
        <div className="second-section__how-it-works__card-div">
          {below850 ? (
            <div className="second-section__how-it-works__mobile-card">
              <h4 className="second-section__how-it-works__card__title">
                Sinuun otetaan yhteyttä
              </h4>
              <PhoneIcon />
            </div>
          ) : (
            <h4 className="second-section__how-it-works__card__title">
              Kiinteistönvälittäjät ottavat yhteyttä
            </h4>
          )}

          <p>
            Sovi ilmaisista hinta-arvioista ja valitse useista
            kiinteistönvälittäjistä teille mieluisin
          </p>
          <div
            style={{ marginTop: 20 }}
            className="second-section__how-it-works__card__flex-wrapper"
          >
            <div className="">
              <CheckIcon height={40} width={40} />
            </div>
            <div className="second-section__how-it-works__card__flex-wrapper__p">
              <p>Teidän ehdoilla</p>
            </div>
          </div>
          <div className="second-section__how-it-works__card__flex-wrapper">
            <div className="">
              <CheckIcon height={40} width={40} />
            </div>
            <div className="second-section__how-it-works__card__flex-wrapper__p">
              <p>Vaivatonta</p>
            </div>
          </div>
          <div className="second-section__how-it-works__card__flex-wrapper">
            <div className="">
              <CheckIcon height={40} width={40} />
            </div>
            <div className="second-section__how-it-works__card__flex-wrapper__p">
              <p>Riskitöntä</p>
            </div>
          </div>
        </div>
        {below850 ? null : <PhoneIcon />}
      </div>
    </div>
  )
}
export default HowItWorks
