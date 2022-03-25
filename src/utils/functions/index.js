export const ListenToScroll = (showCta, setShowCta, ctaMoved, setCtaMoved) => {
  const mainCardHeight =
    document.getElementsByClassName('main-card-wrapper')[0]?.clientHeight

  const elem = document.getElementsByClassName('persistent-cta')[0]
  if (!showCta) {
    if (window.scrollY > mainCardHeight - 500) {
      setShowCta(true)
      elem.style.display = 'inline'
    }
  } else {
    if (window.scrollY < mainCardHeight - 500) {
      setShowCta(false)
      elem.style.display = 'none'
    }
  }
}
