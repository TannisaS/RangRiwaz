import React from 'react';
import './NewCollection.css';
import Item from '../Item/Item';
import new_collection from '../Assets/new_collection';

const NewCollection = () => {
  return (
    <div  className='new-collection'>
        <h1>NEW COLLECTIONS</h1>
        <hr/>
        <div className='new-collection-item'>
            {new_collection.map((item,i)=>{
                return <Item key={i} id={item.id} name={item.nam} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
            })}
        </div>
      
    </div>
  )
}

export default NewCollection
