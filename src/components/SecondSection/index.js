import React from 'react'
import Brands from '../Brands'
import HowItWorks from '../How-It-Works'

const SecondSection = () => {
  return (
    <section className="second-section" id="section2">
      <div className="second-section__title-div">
        <h2>MITEN KIINTEISTÖNVÄLITTÄJIEN KILPAILUTUS TOIMII?</h2>
      </div>
      <HowItWorks />
      <Brands />
    </section>
  )
}
export default SecondSection
