import React from 'react'
import './CheckoutProduct.css'
import { UseStateValue } from './StateProvider'

function CheckoutProduct({id, image, title, price}) {

    const [{ basket }, dispatch] = UseStateValue();

    const removeFromBasket = () => {
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id,
        })
    }

    return (
        <div className="checkoutProduct">
            <img className='checkoutProduct_image' src={image} />

            <div className="checkoutProduct_info">
                <p className='checkoutProduct_title'>
                    {title}
                </p>
                <p className='checkoutProduct_price'>
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
            
                <button onClick={removeFromBasket}>Remove from basket</button>
            </div>

        </div>

        

    )
}

export default CheckoutProduct
