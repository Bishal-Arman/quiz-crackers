
import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import"./Topic.css"
import { ArrowRightIcon } from '@heroicons/react/24/solid'
import { useNavigate } from 'react-router-dom';


const Topic = ({topic}) => {
    const{id,logo,name}=topic;

    const navigate=useNavigate()
    const handleClick=()=>{
      navigate(`/topic/${id}`)
    }

    return (
    <Col >
    <Card className='shadow-lg p-2 bg-white rounded'>
         <Card.Img variant="top"  src={logo} />
        <Card.Body className='d-flex justify-center align-items-center card-body'>
          <Card.Title className='text-info'>{name}</Card.Title>
          <div>
          <Button onClick={handleClick} variant="primary" className='ms-5'>Start  Practice <ArrowRightIcon className="icon" /></Button>
          
          </div>
        </Card.Body>
    </Card>
      </Col>
    );
};

export default Topic;