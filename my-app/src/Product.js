import React from 'react';
import './Product.css';
import { UseStateValue } from './StateProvider';

function Product({ id, title, image, price }) {

    const [{basket}, dispatch] = UseStateValue();

    
    const addToBasket = () => {
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
            },
        });
    }

    const productInfo = [
        {id: '1', image:'https://pbs.twimg.com/media/E3JrsMcVkAIOaw0?format=jpg&name=large', title: 'Custom Lithophane Lamp', info: 'This product is so very cool that we must explain in greater detail how flipping amazing this is', price: '69.99'}
    ]
    
    const renderProduct = (product, index) => {
        return (
            <div className='product'>

                <h2>Make Your Memories Come to Light</h2>

                
                <div className='product_info' key={index}>
                    <img className='product_image' src={product.image} alt='product image' />
                    <p className='product_title'>{product.title}</p>
                    <p className='product_price'>
                        <small>$</small>
                        <strong>{product.price}</strong>    
                    </p>
                    <p>
                        {product.info}
                    </p>
                    <button className='product_button' onClick={addToBasket}>Add to Basket</button>
                </div>

                
                
            </div>      
        )
    }

    return <div className="card">
        {productInfo.map(renderProduct)}
    </div>;

}

export default Product
