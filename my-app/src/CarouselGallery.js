import React from 'react'
import { Carousel, Button } from 'react-bootstrap'
import './JumbotronBanner.css'
import { Link } from 'react-router-dom';


function CarouselGallery() {
      
    return (
        <div>

            <h3>Gallery</h3>
            <Carousel className='carousel_gallery'>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://pbs.twimg.com/media/E4Y4vRSVUAEQ-bD?format=jpg&name=medium"
                    alt="First slide"
                    />
                    <Carousel.Caption>
                        <Link to='/gallery'>
                            <Button variant="primary">Go To Gallery</Button>
                        </Link>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://pbs.twimg.com/media/E43aSmEUYAYU3vt?format=jpg&name=medium"
                    alt="Second slide"
                    />
                    <Carousel.Caption>
                        <Link to='/gallery'>
                            <Button variant="primary">Go To Gallery</Button>
                        </Link>
                    </Carousel.Caption>

                </Carousel.Item>

                {/*<Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://pbs.twimg.com/media/E4Y4vRSVUAEQ-bD?format=jpg&name=medium"
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                        <Link to='/gallery'>
                            <Button variant="primary">Go To Gallery</Button>
                        </Link>
                    </Carousel.Caption>
                </Carousel.Item> */}
                </Carousel>

                <h3>Made with Care</h3>
        </div>
    )
}

export default CarouselGallery
