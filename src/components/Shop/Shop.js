import React, {useState} from 'react';
import './Shop.css';
import fakeData from '../../fakeData';
import Books from '../Books/Books';
import Cart from '../Cart/Cart';

const Shop = () => {
    const books = fakeData;
    const [cart, setCart] = useState([])
    
    const handleBuyNow = (price) => {
        const newPrice = [...cart,price];
        console.log(newPrice)
        setCart(newPrice)
    }
  
    return (
        <div >
            
            <Cart price = {cart}></Cart>
            <div className='row m-4 shop-container'>
            {
                books.map(book=>
                <Books key={book.key}
                productDetail={book}
                handleProduct = {handleBuyNow}
                ></Books>)
            }
            </div>  
        </div>
    );
};

export default Shop;