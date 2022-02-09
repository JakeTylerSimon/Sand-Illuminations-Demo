import React from 'react'
import { Card, Button } from 'react-bootstrap';
import './Deals.css'

function Deals() {

    const dealInfo = [
        {image: 'https://pbs.twimg.com/media/E4TlvkpUUAA2aZQ?format=jpg&name=large', title: 'Buy 2 Get 1 Free', id: '1'},
        {image: 'https://pbs.twimg.com/media/E4TlyIxVEAQJl-z?format=jpg&name=large', title: 'Holiday Special', id: '2'},
        {image: 'https://pbs.twimg.com/media/E4TlsqQUYAAlNb6?format=jpg&name=large', title: 'Super bundle', id: '3'}
    ] 

    const renderDeal = (deal, index) => {


        return (

            <div className='deals'>
                <div className='deals_container'>
                    <Card key={index} className='card_deals' >
                        <Card.Img className='img' variant="top" src={deal.image} />
                        <Card.Body>
                            <Card.Title>{deal.title}</Card.Title>
                            <Button variant="primary">Choose Deal</Button>
                        </Card.Body>
                    </Card>

                </div>
                    
            </div>
        )
    }

    return <div className="grid">
    {dealInfo.map(renderDeal)}
    </div>;

}

export default Deals
