import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
const Brands = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 0,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          dots: false,
          infinite: true,
          slidesToShow: 3,
          slidesToScroll: 1,
          autoplay: true,
          speed: 3000,
          autoplaySpeed: 0,
          cssEase: 'linear',
        },
      },

      {
        breakpoint: 700,
        settings: {
          dots: false,
          infinite: true,
          slidesToShow: 2,
          slidesToScroll: 1,
          autoplay: true,
          speed: 3000,
          autoplaySpeed: 0,
          cssEase: 'linear',
        },
      },

      {
        breakpoint: 550,
        settings: {
          dots: false,
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          speed: 3000,
          autoplaySpeed: 0,
          cssEase: 'linear',
        },
      },
    ],
  }
  return (
    <div className="second-section__brands">
      <h3 className="second-section__brands__title">
        Kiinteistömaailma, REMAX, Huoneistokeskus ja muut isot brändit
        käytettävissänne
      </h3>
      <div className="second-section__brands__carousel">
        <Slider {...settings}>
          <div className="second-section__brands__km brand-icon"></div>
          <div className="second-section__brands__op brand-icon"></div>
          <div className="second-section__brands__remax brand-icon"></div>
          <div className="second-section__brands__huoneistokeskus brand-icon"></div>
          <div className="second-section__brands__roofgroup brand-icon"></div>
          <div className="second-section__brands__huoneistoketju brand-icon"></div>
        </Slider>
      </div>
    </div>
  )
}
export default Brands
