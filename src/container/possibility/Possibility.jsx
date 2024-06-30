import React from 'react'
import "./possibility.css"
import feature from "../../assets/Feature Image.webp"
const Possibility = () => {
  return (
    <div className='possibility__section section__padding' id='possibility'>
  
      <div className='possibility__content'>
        <p>Request Early Access to Get Started</p>
        <h1 className='gradient__text'>The possibilities are beyond your imagination</h1>
        <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
        <p className='possibility__content-subtext'>Request Early Access to Get Started</p>
      </div>

      <div className='possibility__image'>
        <img src={feature} alt="possibility-image" />
      </div>
    </div>
  )
}

export default Possibility
