import React,{createContext, useState} from "react";
import all_products from '../Components/Assets/all_products';
import CartItem from "../Components/CartItem/CartItem";

export const ShopContext=createContext(null);


const getDefaultCart=()=>{
    let cart={};
    for (let index = 0; index < all_products.length+1; index++) {
        cart[index]=0;
    }
    return cart;
}

const ShopContextProvider =(props)=>{
    const [cartItems,setCartItems]=useState(getDefaultCart());
    
    const addToCart=(itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
    }
    const removeFromCart=(itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }
    
    const getTotalAmount=()=>{
        let totalAmount=0;
        for(const item in cartItems){
            if(cartItems[item]>0){
                let iteminfo=all_products.find((product)=>product.id===Number(item))
                totalAmount+=iteminfo.new_price*cartItems[item];
            }
            console.log(totalAmount);
        }
        return totalAmount;
    }

    const getTotalItem=()=>{
        let totalItem=0;
        for(const item in cartItems){
            if(cartItems[item]>0){
                totalItem+=cartItems[item];
            }
        }
        return totalItem;
    }
    const contextValue={getTotalItem,getTotalAmount,all_products,cartItems,addToCart,removeFromCart};
    return (
        <ShopContext.Provider value={contextValue} >
            {props.children}
        </ShopContext.Provider>
    );
};
export default ShopContextProvider;