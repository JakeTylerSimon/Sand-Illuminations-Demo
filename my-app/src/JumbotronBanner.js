import React from 'react'
import { Carousel } from 'react-bootstrap';
import './JumbotronBanner.css'
import 'bootstrap/dist/css/bootstrap.min.css';


const JumbotronBanner = () => {
    return (
        <div className="carousel_container">

            <Carousel fade className='carousel_style'>
                <Carousel.Item >
                    <img
                    className="d-block w-100"
                    src="https://pbs.twimg.com/media/E4JV6IhVEAEQtFM?format=jpg&name=medium"
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h3>First slide label</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100"
                    src="https://pbs.twimg.com/media/E4JV315VgAMBWch?format=jpg&name=medium"
                    alt="Second slide"
                    />

                    <Carousel.Caption>
                    <h3>Second slide label</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://pbs.twimg.com/media/E4JV0nMVcAgdab3?format=jpg&name=medium"
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

            <h3>Our Deals</h3>

        </div>
    )
}

export default JumbotronBanner
