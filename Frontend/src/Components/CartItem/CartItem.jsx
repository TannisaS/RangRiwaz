import React, { useContext } from 'react';
import './CartItem.css';
import {ShopContext} from '../../Context/ShopContext';
const CartItem = () => {
    const {getTotalAmount,all_products,cartItems,removeFromCart}=useContext(ShopContext);
  return (
    <div className='cart-items'>
        <div className='cart-items-format-main'> 
            <p>Products</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
        </div>
        <hr/>
        {all_products.map((e)=>{
            if(cartItems[e.id]>0)
            {
                return <div>
                <div className='cart-item-format'>
                    <img src={e.image} alt='' className='carticon'/>
                    <p>{e.nam}</p>
                    <p>{e.new_price}</p>
                    <button className='cartitem-quantity'>{cartItems[e.id]}</button>
                    <p>{e.new_price*cartItems[e.id]}</p>
                    <button onClick={()=>removeFromCart(e.id)}>Remove</button>
                </div>
                <hr/>
            </div>
            }
        })}
        <div>
                <div className='cartiitem-total-item'>
                    <p>Subtotal</p>
                    <p>Rs.{getTotalAmount()}</p>
                </div>
                <hr/>
                <div className='cartitem-total-item'>
                    <p>Shipping Fee</p>
                    <p>Free</p>
                </div>
                <hr />
                <div className='cartitem-total-item'>
                    <h3>Total</h3>
                    <h3>Rs.{getTotalAmount()}</h3>
                </div>
                <button>PROCEED TO CHECKOUT</button>
        </div>
        <div className='catitem-promo'>
            <p>If you have a promo code, Enter it here</p>
            <div className='catitrm-prpmobox'>
                <input type="text" placeholder="promo code"/>
                <button>SUbmit</button>
            </div>
        </div>

    </div>
  )
}

export default CartItem
