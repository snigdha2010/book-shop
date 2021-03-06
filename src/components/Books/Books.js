import React from 'react';
import './Books.css';

const Books = (props) => {
    const {name,price,img} = props.productDetail;
    console.log(img)
    const getPrice = props.handleProduct;
    return (
                <div className = 'col-md-3 p-4 m-4 w-50 book-container'>
                <img src={img} alt=""/>
                <h3>{name}</h3>
                <p>Price: {price}</p>
                <button onClick={()=>getPrice(price)} className='btn btn-primary'>Buy Now</button>
                </div>  
                
    );
};

export default Books;