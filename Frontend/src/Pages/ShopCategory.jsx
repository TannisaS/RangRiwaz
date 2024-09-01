import React from 'react';
import './CSS/ShopCategory.css';
import { useContext } from 'react';
import { ShopContext } from '../Context/ShopContext';
import Item from '../Components/Item/Item';

export default function ShopCategory(props) {
  const {all_products}=useContext(ShopContext);
  return (
    <div className='shop-category'>
       <img src={props.banner} alt='banner'/>
       <div className='shop-category-product'>
          {all_products.map((item,i)=>{ 
            if(props.category===item.category){
            return <Item key={i} id={item.id} name={item.nam} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
          }
          else{
            return null;
          }})}
       </div>
    </div>
  )
}
