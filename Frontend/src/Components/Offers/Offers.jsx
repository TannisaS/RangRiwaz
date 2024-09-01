import React from 'react'
import offer from '../Assets/offer-right.webp';
import './Offers.css';
const Offers = () => {
  return (
    <div className='offer'>
      <div className='offer-left'>
        <h1>Exclusive Offers</h1>
        <h1>Handpicked for you</h1>
        <button>Check Now!</button>
      </div>
      <div className='offer-right'>
        <img src={offer} alt=""/>
      </div>
    </div>
  )
}

export default Offers
