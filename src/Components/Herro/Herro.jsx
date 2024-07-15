import React from 'react'
import './Hero.css'
import hand_icon from '../Assets/hand_icon.png'
import arrow_icon from '../Assets/arrow.png'
import herow_image from '../Assets/hero_image.png'
function Herro() {
  return (
    <div className='hero'>
       <div className="hero-left">
      <h2>NEW ARRIVALS ONLY</h2>
      <div>
        
     <div className="hero-hand-icon">
        <p> NEW</p>
        <img src={hand_icon} alt="" />
     </div>
      <p>collections</p> 
      <p>for everyone</p>
      </div>
      
      <div className="hero-latest-btn">
        <div>Letest collection</div>
        <img src={arrow_icon} alt="" />
      </div>
       </div>
       <div className="hero-wright">
             <img src={herow_image} alt="" />
       </div>
    </div>
  )
}

export default Herro