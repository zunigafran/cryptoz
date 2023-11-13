import React from 'react'
import Crypto from '../assets/hero-img.png'
import './Hero.css'

const Hero = () => {
  return (
   <div className="hero">
    <div className="container">
        {/* left side */}
        <div className="left">
            <p>Buy & Sell Crypto using your bank or retirement account</p>
            <h1>Invest in Cryptocurrency</h1>
            <p>Buy, Sell, and store hundreds of cryptocurrencies</p>
            <div className="input-container">
                <input type="email" placeholder='Enter your email' />
                <button className="btn">Learn More</button>
            </div>
        </div>

        {/* right side */}
        <div className="right">
                <div className="img-container">
                    <img src={Crypto} alt=''/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero