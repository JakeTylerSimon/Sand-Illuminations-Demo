import React from 'react'
import Product from './Product';

function OurProducts() {
    return (
        <div>
            <div className='home_row'>
                <Product id={1} title='3D Printed Lithphane Lampshade' price={69.97} image='https://pbs.twimg.com/media/E3JrsMcVkAIOaw0?format=jpg&name=large' />
            </div>
        </div>
    )
}

export default OurProducts;