import React from 'react';
import './Breadcrum.css';
import arrow_icon from '../Assets/arrow_icon.png';

const Breadcrum = (props) => {
    const {product}=props;  
  return (
    <div className='breadcrum'>
      HOME &gt; SHOP &gt; {product.category} &gt; {product.nam}
    </div>
  )
}

export default Breadcrum;
