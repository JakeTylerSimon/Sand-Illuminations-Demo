import React from 'react';
import './Checkout.css';
import CheckoutProduct from './CheckoutProduct';
import { UseStateValue } from './StateProvider';
import Subtotal from './Subtotal';

function Checkout() {
    const [{ basket }, dispatch] = UseStateValue();

    return (
        <div className='checkout'>
            <div className='checkout_left'>
                <img className='checkout_ad' src='./sandIlluminations.png' alt='Logo' />
            
                <div>
                    <h2 className='checkout_title'>Your Shopping Basket</h2>

                    {basket.map(item => (
                        <CheckoutProduct
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                        />
                    ))}
                </div>
        
            </div>

            <div className='checkout_right'>
                <Subtotal />
            </div>

            
        </div>
    )
}

export default Checkout