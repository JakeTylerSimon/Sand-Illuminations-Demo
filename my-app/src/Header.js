import React from 'react'
import './Header.css';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link } from 'react-router-dom';
import { UseStateValue } from './StateProvider';


function Header() {

    const [{basket}, dispatch] = UseStateValue();


    return (
        <div className='header'>
            <Link to='/'>
                <img className='header_logo' id='home' src='https://pbs.twimg.com/media/E3JtDwOVoAAjfxJ?format=png&name=900x900' />
            </Link>
            
            <div className='header_nav'>

                <Link to='/product'>
                    <div className='header_option' id='shop'>
                        <span className='header_optionLineOne'>
                            Shop
                        </span>    
                    </div>
                </Link>

                <Link to='/story'>
                    <div className='header_option' id='story'>
                        <span className='header_optionLineOne'>
                            Our Story
                        </span>
                    </div>
                </Link>

                {/* <Link to='/testimonial'>
                    <div className='header_option'>
                        <span className='header_optionLineOne'>
                            Testimonials
                        </span>
                    </div>
                </Link> */}

                <Link to='contact'>
                    <div className='header_option' id='contact'>
                        <span className='header_optionLineOne'>
                            Contact Us
                        </span>
                    </div>
                </Link>

                <Link to='/checkout'>
                    <div className='header_optionBasket'>
                        <ShoppingBasketIcon/>
                        <span className='header_optionLineTwo header_basketCount'>
                            {basket?.length}
                        </span>
                    </div>
                </Link>
                
            </div>
        </div>
    )
}

export default Header;