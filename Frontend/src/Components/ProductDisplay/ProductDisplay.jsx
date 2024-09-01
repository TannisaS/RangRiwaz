import React, { useCallback, useContext } from 'react';
import './ProductDsiplay.css';
import { ShopContext } from '../../Context/ShopContext';

const ProductDisplay = (props) => {
    const {product}=props;
    const {addToCart}=useContext(ShopContext);
  return (
    <div className='product-display'>
      <div className='product-display-left'>
        <div className='product-display-image-list'>
            <img src={product.image} alt=''/>
            <img src={product.image} alt=''/>
            <img src={product.image} alt=''/>
            <img src={product.image} alt=''/>
        </div>
        <div className='product-display-img'>
            <img className='product-display-main-img' src={product.image} alt=''/>
        </div>
      </div>
      <div className='product-display-right'>
            <h1>{product.nam}</h1>
            <h2>★ ★ ★ ☆ ☆</h2>
            <p>(122)</p>
            <div className='product-display-price'>
                <div className='product-new-price'>Rs.{product.new_price}</div>
                <div className='prodct-old-price'>Rs.{product.old_price}</div>
            </div>
            <div className='product-description'>
                A heavy embroidered anarkali suit.
            </div>
            <div className='product-display-size'>
                <h1>Select Size</h1>
                <div className='product-display-size'>
                    <div>S</div>
                    <div>M</div>
                    <div>L</div>
                    <div>XL</div>
                    <div>XXL</div>
                </div>
            </div>
            <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
            <p className='product-tags'>Category:<span>Women, Red Anarkali, Heavy Embroidary</span></p>
            <p className='product-tags'>Tags:<span>Red, Festive, Occassional</span></p>
            
      </div>
    </div>
  )
}

export default ProductDisplay
