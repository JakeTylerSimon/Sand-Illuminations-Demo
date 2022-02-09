import React from 'react';
import './Home.css';

function LogoHead() {
    return (
        <div className='logo_border'>
            <h2 className='company'>Sand Illuminations</h2>

            <img className='home_image' src='https://pbs.twimg.com/media/E3JtDwOVoAAjfxJ?format=png&name=900x900' alt='Logo' />
        
            <h5 className='slogan'>Making Memories Come to Light</h5>
        </div>
    )
}

export default LogoHead;
