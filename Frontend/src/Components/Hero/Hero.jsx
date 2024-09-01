import React from 'react';
import './Hero.css';
import hand_icon from '../Assets/hand_icon.webp';
import hero_righ from '../Assets/hero-righ.webp';
export default function Hero() {
  return (
    <div className='hero'>
        <div className='hero-left'>
            <h1>New Arrivals</h1>
            <div className='hero-hand-icon'>   
                <p>NEW</p>
                <img src={hand_icon} alt='' className='hand'/>
            </div>
            <p>Collection</p>
            <p>For Everyone</p>
            <div className='hero-button'>
                <button>Check Out!</button>
            </div>
        </div>
        <div className='hero-right'>
            <img src={hero_righ} alt=""/>
        </div>
    </div>
  )
}
 