import React, { useState,useEffect } from "react";
import {useDataContext} from "../../DataContext"
// import { MathJax } from "better-react-mathjax";
import "./quiz.scss";
import { useNavigate } from "react-router-dom";
import Render from "./Render";


function Quiz({questions,trans}) {
  const navigate =useNavigate();
  const {handeltimesave,handeltotaltime}=useDataContext();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState({});
  const [page,setPage]=useState(false);
  const [timer,setTimer]=useState(0);
  const [mytime, setMytime] = useState(new Array(trans.length).fill(0));
  // console.log(trans)

  useEffect(() => {
    let interval;

    if (page && timer >= 0) {
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer + 1);
      }, 1000);
    }

    return () => {
      clearInterval(interval);
    };
  }, [page, timer]);

  const handleStart = () => {
    setPage(true);
  };

  const handleStop = () => {
    setTimer(0);
  };

  const currentAnswer = userAnswers[currentQuestion] || "";

  const goToNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      const newtime = [...mytime];
      newtime[currentQuestion]=timer
      setMytime(newtime)
      console.log(mytime,userAnswers)
      handleStop()
      setPage(false)
    }
  };

  const goToPreviousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      const newtime = [...mytime];
      newtime[currentQuestion]=timer
      setMytime(newtime)
      console.log(mytime)
      handleStop()
      setPage(false)
    }
  };

  const handleAnswerChange = (e) => {
    const newAnswers = { ...userAnswers, [currentQuestion]: e.target.value };
    setUserAnswers(newAnswers);
  };
  const handelsubmit=()=>{
    handeltotaltime();
    handeltimesave(mytime);
    navigate("/final")
  }

  if(page===false){
    return(
      <div className="trans"><button className="buttrans" onClick={handleStart}>Start</button></div>
    )
  }
  // if(page===true){

  return (


    <div className="quiz">
      <button className="style" onClick={handelsubmit}>Submit</button>
        <div className="middle">          
          <Render url={trans[currentQuestion].Question}></Render>
          <h4>{timer} Sec</h4>
        </div>
        <div className="bottom">
            <button onClick={goToPreviousQuestion} disabled={currentQuestion === 0}>
                Previous
            </button>
            <input
                type="text"
                value={currentAnswer}
                onChange={handleAnswerChange}
                placeholder="Enter your answer"
            />
            <button
                onClick={goToNextQuestion}
                disabled={currentQuestion === questions.length - 1}>
                Next
            </button>
        </div>
    </div>
  );
  }


export default Quiz;