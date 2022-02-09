import React from 'react';
import './Home.css';
import { Card, Button } from 'react-bootstrap';

function Home() {

    const cardInfo = [
        {image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBMqtS3KjqGsJj3wIFI1mLQvueXvkSxh1-V8MfgDjacZOJWZ-ZH_mNgFsjsNo&usqp=CAc', title: 'Strong and Durable', text: 'This is a custom description we will come up with the discuss how amazingly awesome our product is and why we think you should be pay us $$', id: '1'},
        {image: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRR7Sh1YrIuTQGgNa8k_yR8LDnMnQAb6zKKd3qLp2mc38dE6mL4EwkHdeek3vu1kVWU2NjXBuIQyJP0hqE0dzs06VtSWcrT8RXyZdfCrLfr&usqp=CAc', title: 'Heat Resistant', text: 'This is a custom description we will come up with the discuss how amazingly awesome our product is and why we think you should be pay us $$', id: '1'},
        {image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0YqjSKvDYsjRwfyFea6M_lyNShGycSGNhuijVQsv2BHAw4zHokUi7fyf_f0M&usqp=CAc', title: 'Extreme Artistic Detail', text: 'This is a custom description we will come up with the discuss how amazingly awesome our product is and why we think you should be pay us $$', id: '1'},
        {image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwKLs19TPju9x9WzHBQvD_8m-4XjSCeWuiaj4_3qMypOHxaDN1fyPCV8KvnqxDap4zprJdqRE&usqp=CAc', title: '100% Customizable', text: 'This is a custom description we will come up with the discuss how amazingly awesome our product is and why we think you should be pay us $$', id: '1'}
    ] 

    const renderCard = (card, index) => {

        return (
            <div className='home'>
                <div className='home_container'>
                    <Card key={index} className='cards' >
                        <Card.Img variant="top" src={card.image} />
                        <Card.Body>
                            <Card.Title>{card.title}</Card.Title>
                            <Card.Text>
                                {card.text}
                            </Card.Text>
                            <Button variant="primary">Customize Now</Button>
                        </Card.Body>
                    </Card>

                </div>
                
            </div>
        )
    }

        return <div className="grid">
            {cardInfo.map(renderCard)}
        </div>;
  
}

export default Home;