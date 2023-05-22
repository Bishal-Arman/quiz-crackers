import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import Topic from '../Topic/Topic';
import"./Topics.css"

const Topics = () => {
    const fullcontents=useLoaderData()
    const contents=fullcontents.data;
    
    return (
<Container  className='mt-5' >
       <Row sm={1}  md={2} lg={3}className="g-4">
      {
      contents.map(topic=><Topic
      key={topic.id}
      topic={topic}
      ></Topic>)
      }
    </Row>
 </Container>
    );
};

export default Topics;
