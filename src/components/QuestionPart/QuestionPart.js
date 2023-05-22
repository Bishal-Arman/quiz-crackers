import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import QuestionsDetails from '../QuestionsDetails/QuestionsDetails';
import"./QuestionPart.css"

const QuestionPart = () => {
    const questionsLoaded=useLoaderData()
    const questionsDatas=questionsLoaded.data;
    const {name,questions}=questionsDatas;

const[score,setScoe]=useState(0)
   
const handleScore=()=>{
    setScoe(score+1)
   
}



    return (
        
          
                 <div className='text-center mt-5'>
           <h1 className='heading'>Your score is : <span className='count'>{score }</span> out of <span className='count'>{questions.length}</span></h1>
           <h2 className='text-primary '>Quiz of {name}</h2>
           <div className='quiz-container'>
            {
                questions.map((question,idx)=><QuestionsDetails
                key={question.id}
                question={question}
              idx={idx+1}
              handleScore={handleScore}
                ></QuestionsDetails>)
            }
           </div>
            </div>
            
         
            
        
    );
};

export default QuestionPart;