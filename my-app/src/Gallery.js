import React from 'react'
import {Card} from 'react-bootstrap'
import './Gallery.css'

function Gallery() {
    return (
        <div className='gallery_container' id='gallery'>

            <h3>Our Gallery</h3>
            <div className="gallery">
                    <Card  className='gallery_cards'>
                        <Card.Img variant="top" src="https://pbs.twimg.com/media/E4eR5LBUYAE3K75?format=jpg&name=small" />
                    </Card>
                    <Card  className='gallery_cards'>
                        <Card.Img variant="top" src="https://pbs.twimg.com/media/E4eR4hbVkCAeGFo?format=jpg&name=small" />
                    </Card>
                    <Card  className='gallery_cards'>
                        <Card.Img variant="top" src="https://pbs.twimg.com/media/E4eR30sVEAEmFOh?format=jpg&name=small" />
                    </Card>
                                       
                    <Card  className='gallery_cards'>
                        <Card.Img variant="top" src="https://pbs.twimg.com/media/E4eR2XiVgAEHnXV?format=jpg&name=small" />
                    </Card>
                    <Card  className='gallery_cards'>
                        <Card.Img variant="top" src="https://pbs.twimg.com/media/E4eR81iVIAA6OCL?format=jpg&name=small" />
                    </Card>
                    <Card  className='gallery_cards'>
                        <Card.Img variant="top" src="https://pbs.twimg.com/media/E4eR8EjVkAcPuf-?format=jpg&name=small" />
                    </Card>
                    
                
            </div>
        </div>
    )
}

export default Gallery
