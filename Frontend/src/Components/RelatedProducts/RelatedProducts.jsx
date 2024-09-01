import React from 'react';
import './RelatedProducts.css';
import data_product from '../Assets/all_products';
import Item from '../Item/Item';

const RelatedProducts = () => {
  return (
    <div className='related-products'>
        <h1>Related Products</h1>
        <hr/>
        <div className='related-products-item'>
            {data_product.map((item,i)=>{
                return <Item key={i} id={item.id} name={item.nam} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
            })}
        </div>
      
    </div>
  )
}

export default RelatedProducts
