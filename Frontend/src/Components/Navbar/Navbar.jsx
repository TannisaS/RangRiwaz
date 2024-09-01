import React, { useContext } from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css'
import { useState } from 'react';
import logo from '../Assets/log.jpg'
import cart_logo from '../Assets/cart.jpg'
import { ShopContext } from '../../Context/ShopContext';

const Navbar = () => {
    const [menu,setMenu] = useState("all");
    const { getTotalItem } = useContext(ShopContext);
    return (
    <div className='navbar'>
        <div className='nav-logo'>
            <img src={logo} alt=""/>
            <p>Shoppers' Stop</p>
        </div>
     <ul className='nav-menu'>
            <li onClick={()=>{setMenu("all");}}><Link to='/'>All</Link>{menu === "all"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("men");}}><Link to='/men'>Men</Link>{menu === "men"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("women");}}><Link to='/women'>Women</Link>{menu === "women"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("kids");}}><Link to='/kids'>Kids</Link>{menu === "kids"?<hr/>:<></>}</li>
        </ul> 
        <div className='nav-login'>
            <Link to='/login'><button>Login</button></Link>
            <Link to='/cart'><img src={cart_logo} alt=""/></Link>
            <div className='nav-cart-count'>{getTotalItem()}</div>
        </div>
    </div>
  )
}
export default Navbar;
