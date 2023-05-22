import React from 'react';
import"./QuestionAllOption.css"
const QuestionAllOption = ({questionOption,handleShowAllert}) => {
  

    return (
        <div className='option text-primary fs-5'>
            
            <p  onClick={()=>handleShowAllert(questionOption)}>{questionOption}</p>
           
        </div>
    );
};

export default QuestionAllOption;