import emailjs from '@emailjs/browser'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import {
  ChevronDownIcon,
  CloseIcon,
  Erillistalo,
  ErrorIcon,
  KerrostaloIcon,
  LomaAsuntoIcon,
  Omakotitalo,
  ParitaloIcon,
  RivitaloIcon,
  SuccessIcon,
} from '../../utils/icons'
import Slider from '@mui/material/Slider'
const Form = () => {
  const [page, setPage] = useState(0)
  const [houseType, setHouseType] = useState('Valitse')
  const [whenStart, setWhenStart] = useState(null)
  const [postinumero, setPostinumero] = useState(null)
  const [katuosoite, setKatuosoite] = useState(null)
  const [asunnonNro, setAsunnonNro] = useState(null)
  const [paikkakunta, setPaikkakunta] = useState(null)
  const [pintaAla, setPintaAla] = useState(null)
  const [puhelinnumero, setPuhelinnumero] = useState(null)
  const [sahkoposti, setSahkoposti] = useState(null)
  const [lkv, setLkv] = useState(false)
  const [edullisuusVsKokemus, setEdullisuusVsKokemus] = useState(50)
  const [realtorWishes, setRealtorWishes] = useState('Ei ole väliä')
  const promoCode = useSelector((state) => state.promoCode)

  const houseTypes = [
    { type: 'Kerrostalo', icon: <KerrostaloIcon /> },
    { type: 'Rivitalo', icon: <RivitaloIcon /> },
    { type: 'Paritalo', icon: <ParitaloIcon /> },
    { type: 'Omakotitalo', icon: <Omakotitalo /> },
    { type: 'Erillistalo', icon: <Erillistalo /> },
    { type: 'Loma-asunto', icon: <LomaAsuntoIcon /> },
  ]

  const whenStartButtons = [
    'Heti',
    '1-3 Kuukautta',
    'Myöhemmin',
    'Myynti on jo aloitettu',
  ]

  const handlePrevClick = (e) => {
    e.preventDefault()
    setPage(page - 1)
  }

  const handleNextClick = (e) => {
    e.preventDefault()
    const errorMessage = document.getElementsByClassName(
      'form__content__error-msg'
    )[0]
    const nextBtn = document.getElementsByClassName(
      'form__content__info-box__next'
    )[0]
    const prevBtn = document.getElementsByClassName(
      'form__content__info-box__previous'
    )[0]
    if (page === 0) {
      if (
        !houseType ||
        !postinumero ||
        !katuosoite ||
        !paikkakunta ||
        !asunnonNro ||
        !pintaAla
      ) {
        errorMessage.style.display = 'inline'
        window.scrollTo(0, 0)
        setTimeout(function () {
          errorMessage.style.opacity = '0'
          setTimeout(function () {
            errorMessage.style.display = 'none'
            errorMessage.style.opacity = '1'
          }, 2000)
        }, 4000)
      } else {
        setPage(page + 1)
        errorMessage.style.display = 'none'
        errorMessage.style.opacity = '1'
      }
    }

    if (page === 1) {
      setPage(page + 1)
    }

    if (page === 3) {
      if (!puhelinnumero || !sahkoposti) {
        errorMessage.style.display = 'inline'
        setTimeout(function () {
          errorMessage.style.opacity = '0'
          setTimeout(function () {
            errorMessage.style.display = 'none'
            errorMessage.style.opacity = '1'
          }, 2000)
        }, 4000)
      } else {
        setPage(page + 1)
        errorMessage.style.display = 'none'
        errorMessage.style.opacity = '1'
        nextBtn.style.display = 'none'
        prevBtn.style.display = 'none'
        const params = {
          osoite: katuosoite,
          puhelinnumero: puhelinnumero,
          sahkoposti: sahkoposti,
          asunnonNro: asunnonNro,
          paikkakunta: paikkakunta,
          postinumero: postinumero,
          pintaAla: pintaAla,
          houseType: houseType,
          whenStart: whenStart,
          promoCode: promoCode,
          lkv: lkv,
          edullisuusVsKokemus: edullisuusVsKokemus,
          realtorWishes: realtorWishes,
        }
        emailjs.send(
          process.env.NAME,
          process.env.TEMPLATE,
          params,
          process.env.UID
        )
      }
    }
  }

  const handleDropDownClose = () => {
    const elem = document.getElementsByClassName(
      'form__content__info-box__dropdown__items'
    )[0]
    elem.style.display = 'none'
  }

  const handleDropdownClick = (type) => {
    setHouseType(type)
    handleDropDownClose()
  }

  const handleDropdownOpen = () => {
    const elem = document.getElementsByClassName(
      'form__content__info-box__dropdown__items'
    )[0]

    elem.style.display = 'inline'
  }

  const handleInputChange = (setInputType, value) => {
    setInputType(value)
  }

  const handleWhenStartButtonClick = (e, value) => {
    setPage(page + 1)
    setWhenStart(value)
  }

  const pages = [
    <>
      <h3 className="form__content__info-box__title">Asunnon tiedot</h3>
      <div className="form__content__info-box__grid">
        <div className="form__content__info-box__grid__item">
          <p className="form__content__info-box__input__header">Katuosoite *</p>
          <div className="form__content__info-box__input">
            <input
              className="form__content__info-box__input__field"
              name="street_address"
              onChange={(e) => {
                handleInputChange(setKatuosoite, e.target.value)
              }}
            ></input>
          </div>
        </div>
        <div className="form__content__info-box__grid__item">
          <p className="form__content__info-box__input__header">
            Rappu ja asunnon numero
          </p>
          <div className="form__content__info-box__input">
            <input
              className="form__content__info-box__input__field"
              onChange={(e) => {
                handleInputChange(setAsunnonNro, e.target.value)
              }}
            ></input>
          </div>
        </div>

        <div className="form__content__info-box__grid__item">
          <p className="form__content__info-box__input__header">
            Postinumero *
          </p>
          <div className="form__content__info-box__input">
            <input
              className="form__content__info-box__input__field"
              onChange={(e) => {
                handleInputChange(setPostinumero, e.target.value)
              }}
            ></input>
          </div>
        </div>

        <div className="form__content__info-box__grid__item">
          <p className="form__content__info-box__input__header">
            Paikkakunta *
          </p>
          <div className="form__content__info-box__input">
            <input
              className="form__content__info-box__input__field"
              onChange={(e) => {
                handleInputChange(setPaikkakunta, e.target.value)
              }}
            ></input>
          </div>
        </div>

        <div className="form__content__info-box__grid__item">
          <p className="form__content__info-box__input__header">Pinta-ala *</p>
          <div className="form__content__info-box__input">
            <input
              className="form__content__info-box__input__field"
              onChange={(e) => {
                handleInputChange(setPintaAla, e.target.value)
              }}
            ></input>
          </div>
        </div>

        <div className="form__content__info-box__grid__item">
          <p className="form__content__info-box__input__header">
            Asunnon tyyppi *
          </p>
          <div className="form__content__info-box__input">
            <div
              className="form__content__info-box__dropdown"
              onClick={handleDropdownOpen}
            >
              <div>{houseType}</div>
              <div>
                {houseType !== 'Valitse' ? null : (
                  <ChevronDownIcon height={25} width={25} />
                )}
              </div>
            </div>
          </div>
          <div className="form__content__info-box__dropdown__items">
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: 30,
              }}
            >
              <h2>Tyyppi</h2>
              <div onClick={handleDropDownClose}>
                <CloseIcon />
              </div>
            </div>
            {houseTypes.map((item) => {
              return (
                <div
                  className="form__content__info-box__dropdown__items__item"
                  key={item.type}
                  onClick={(e) => {
                    e.preventDefault()
                    handleDropdownClick(item.type)
                  }}
                >
                  {item.icon}
                  {item.type}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </>,
    <>
      <h3 className="form__content__info-box__title">
        Kiinteistönvälittäjään liittyvät toiveesi
      </h3>
      <div className="form__content__info-box__textfield">
        <p className="form__content__info-box__input__header">
          Kerro toiveesi (vapaaehtoinen)
        </p>
        <textarea
          className="form__content__info-box__textfield__field"
          placeholder="Etsitkö kokenutta, viime aikoina hyvin pärjännyttä vai edullista kiinteistönvälittijää?"
          onChange={(e) => {
            handleInputChange(setRealtorWishes, e.target.value)
          }}
        ></textarea>
        <p className="form__content__info-box__input__header">
          Odotatko välittäjän olevan LKV?
        </p>
        <div className="form__content__info-box__textfield__checkboxes">
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <input
              type="radio"
              value={'Ei ole väliä onko LKV'}
              name="lkv_status"
              defaultChecked
              onChange={(e) => {
                handleInputChange(setLkv, e.target.value)
              }}
            ></input>
            <label style={{ marginLeft: 10, fontSize: 20, marginRight: 15 }}>
              Ei ole väliä
            </label>
          </div>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <input
              type="radio"
              name="lkv_status"
              value={'Odotan olevan LKV'}
              onChange={(e) => {
                handleInputChange(setLkv, e.target.value)
              }}
            ></input>

            <label style={{ marginLeft: 10, fontSize: 20 }}>Odotan</label>
          </div>
        </div>
        <p
          className="form__content__info-box__input__header"
          style={{ textAlign: 'center', marginTop: 30 }}
        >
          Priorisoitko hintaa vai kokemusta välittäjässä?
        </p>
        <div className="form__content__info-box__textfield__slider-div">
          <label style={{ fontWeight: 'bold' }}>Edullisuus</label>

          <label style={{ fontWeight: 'bold' }}>Kokemus</label>
        </div>

        <Slider
          aria-label="Volume"
          defaultValue={50}
          onChange={(e) => {
            handleInputChange(setEdullisuusVsKokemus, e.target.value)
          }}
          className="form__content__info-box__textfield__slider"
        />
      </div>
    </>,
    <>
      <h3 className="form__content__info-box__title">
        Milloin asunnon myynti aloitetaan?
      </h3>
      <div className="form__content__info-box__grid">
        {whenStartButtons.map((item) => {
          return (
            <div key={item} className="form__content__info-box__grid__item">
              <button
                className="form__content__info-box__grid__btn"
                onClick={(e) => {
                  handleWhenStartButtonClick(e, item)
                }}
              >
                {item}
              </button>
            </div>
          )
        })}
      </div>
    </>,
    <>
      <h3 className="form__content__info-box__title">Yhteystiedot</h3>
      <div className="form__content__info-box__grid">
        <div className="form__content__info-box__grid__item">
          <p className="form__content__info-box__input__header">
            Puhelinnumero *
          </p>
          <div className="form__content__info-box__input">
            <input
              className="form__content__info-box__input__field"
              onChange={(e) => {
                handleInputChange(setPuhelinnumero, e.target.value)
              }}
            ></input>
          </div>
        </div>
        <div className="form__content__info-box__grid__item">
          <p className="form__content__info-box__input__header">Sähköposti *</p>
          <div className="form__content__info-box__input">
            <input
              className="form__content__info-box__input__field"
              onChange={(e) => {
                handleInputChange(setSahkoposti, e.target.value)
              }}
            ></input>
          </div>
        </div>
      </div>
    </>,

    <>
      <h3 className="form__content__info-box__success-title">
        Aloitamme kilpailuttamisen puolestasi!
      </h3>
      <SuccessIcon />
    </>,
  ]

  return (
    <>
      <div className="form__background">
        <form className="form">
          <div className="form__content">
            <div className="form__content__info-box">
              <div className="form__content__error-msg">
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    marginTop: 5,
                  }}
                >
                  <ErrorIcon />
                  Virhe kenttien validoinnissa
                </div>
              </div>
              {pages[page]}
              <div className="button-wrapper">
                {page === 0 ? (
                  <div></div>
                ) : (
                  <button
                    className="form__content__info-box__previous"
                    onClick={handlePrevClick}
                  >
                    Edellinen
                  </button>
                )}
                {page === 2 ? (
                  <div></div>
                ) : page === 3 ? (
                  <button
                    className="form__content__info-box__next"
                    style={{ background: '#44AF69' }}
                    onClick={handleNextClick}
                  >
                    Kilpailuta
                  </button>
                ) : (
                  <button
                    className="form__content__info-box__next"
                    onClick={handleNextClick}
                  >
                    Seuraava
                  </button>
                )}
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  )
}
export default Form
