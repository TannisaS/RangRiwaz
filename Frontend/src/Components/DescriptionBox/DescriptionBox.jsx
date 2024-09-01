import React from 'react';
import './DescriptionBox.css';

const DescriptionBox = () => {
  return (
    <div className='description-box'>
        <div className='description-box-navigator'>
            <div className='description-box-nav'>Description</div>
            <div className='description-box-nav-fade'>Review</div>
        </div>
        <div className='description'>
            An e-commerce website for ethnic wear.
        </div>
      
    </div>
  )
}

export default DescriptionBox
