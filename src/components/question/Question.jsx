import React from 'react'
import "./question.scss";
import {useDataContext} from "../../DataContext";
import Quiz from './Quiz';

const Question = () => {
    const {realdata} = useDataContext()
    // console.log(realdata)
    
    
    
    const transformedArray = realdata.map((item, index) => ({
        id: index + 1,
        QuestionID: item.QuestionID,
        Question:item.Question
      }));
              
        const initialData = [
            { id: 1, name: "Item 1" },
            { id: 2, name: "Item 2" },
            { id: 3, name: "Item 3" },
            // Add more data items
          ];
    
    
      return (
        <div className='questions'>
            <div className="question_navbar">
                <h1>Nioclass</h1>
                {/* <button onClick={handelfinal}>Submit</button> */}
            </div>
            <div className="question_body">
                <div className="question_container">
                    <Quiz questions={initialData} trans={transformedArray} />
                </div>
    
            </div>
    
        </div>
      )



    }
    


export default Question