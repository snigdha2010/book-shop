import React from 'react';
import './Cart.css'


const Cart = (props) => {
    console.log(props)
    const totalPrice = props.price;
    const totalAmount = totalPrice.reduce((init,cur)=>init+cur,0)
    const price = totalAmount.toFixed(2)
    
    return (
        <div className = 'cart'>
           <h1>Cart Item:  {props.price.length}</h1> 
            <h2>Cart Total: {price} </h2> 
        </div>
    );
};

export default Cart;