import React from 'react';
import './Footer.css';
import logo from '../Assets/log.jpg'
import wplogo from '../Assets/wp_logo.png';
import instalogo from '../Assets/insta_logo.jpg';
import pinlogo from '../Assets/pinterest_logo.jpg';
const Footer = () => {
    let y=new Date().getFullYear();
  return (
    <div className='footer'>
      <div className='footer-logo'>
        <img src={logo} alt="logo"/>
        <p>Shoppers' Stop</p>
      </div>
      <ul className='footer-links'>
        <li>Company</li>
        <li>Product</li>
        <li>Ofiices</li>
        <li>About</li>
        <li>Contact</li>
        </ul>
        <div className='social-icon'>
            <div className='icon-container'>
                <img src={wplogo} alt='Whatsapp'/>
            </div>
            <div className='icon-container'>
                <img src={instalogo} alt='Instagram'/>

            </div>
            <div className='icon-container'>
                <img src={pinlogo} alt='Pinterest'/>
            </div>
        </div>
        <div className='footer-copyright'>
            <hr/>
            <p>Copyright @ {y}</p>
        </div>
    </div>
  )
}

export default Footer
