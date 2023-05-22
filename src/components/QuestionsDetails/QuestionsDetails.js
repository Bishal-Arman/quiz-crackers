

import { Container, Modal, Row } from 'react-bootstrap';
import QuestionAllOption from '../QuestionAllOption/QuestionAllOption';
import"./QuestionDetails.css"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { EyeIcon } from '@heroicons/react/24/solid'
import { useState } from 'react';


const QuestionsDetails = ({question,idx,handleScore}) => {
   const questionOptions=question.options;
//   console.log(question.correctAnswer)
   const [show, setShow] = useState(false);
  

   

    const handleShowAllert=(isCorrect)=>{
      
        if(isCorrect===question.correctAnswer){
         toast.success("You choose the right answer!!");
         handleScore()
          
        }
        else{
            toast.error("Sorry!It's wrong answer");
        } 
        
      }

     
      const handleClose = () => setShow(false);
      const handleShow = () => setShow(true);
    
       return (
        <div className='quiz-details'>
            <ToastContainer
        position='top-right'
        autoClose={500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='light'
      />
      {
        show && (
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title className='modal-title'>Correct answer below</Modal.Title>
              </Modal.Header>
              <Modal.Body className='modal-body'>{question.correctAnswer}</Modal.Body>
          
            </Modal>)
      }
         
        <div className='d-flex justify-content-center align-items-center'>
        <h4 className='text-success fw-bold '>Quiz {idx}: {question.question}</h4>
            <EyeIcon  onClick={handleShow} className="eye-icon" />
    
        </div>
          <div className='options-container' >
          <Container fluid>
            <Row sm={1} md={1} lg={2}  className="g-4 ">
            {
            questionOptions.map((questionOption,idx)=><QuestionAllOption
            key={idx}
          
                questionOption={questionOption}

                handleShowAllert={handleShowAllert}
                question={question}
             
            ></QuestionAllOption>)
           }
            </Row>
          </Container>
          </div>

        

    
        </div>
    );
};

export default QuestionsDetails;