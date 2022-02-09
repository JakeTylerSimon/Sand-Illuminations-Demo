import React from 'react';
import './Story.css';
import { Card } from 'react-bootstrap';


function Story() {


    const personInfo = [
        {image: 'https://images.pexels.com/photos/1000445/pexels-photo-1000445.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500', text: 'This is a custom description we will come up with the discuss how amazingly awesome our team is and why we think you should be pay us $$', foot: 'A Family Owned Business', id: '1'},
    ] 

    const renderPerson = (person, index) => {

        return (

            <div className='creator'>
                <div className='creator_container'>

                    <Card key={index} className='card' >
                        <Card.Img variant="top" src={person.image} />
                            <Card.Body>
                                <Card.Title>{person.name}</Card.Title>
                                <Card.Text>
                                    {person.text}
                                </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            {person.foot}
                        </Card.Footer>
                    </Card>

                </div>
                    
            </div>        
        
        )
    }

    return <div className="grid">
    {personInfo.map(renderPerson)}
    </div>;

}

export default Story
