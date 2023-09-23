import React,{useEffect} from 'react';
import "./home.scss";
import CustomTable from './CustomTable';
import {useDataContext} from "../../DataContext";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const {handelName,selectedItems,handledata,realdata}=useDataContext();
    const navigate = useNavigate();
        useEffect(()=>{
            async function fetchDataWithParameter(parameter) {
                try {
                  const apiUrl = `https://0h8nti4f08.execute-api.ap-northeast-1.amazonaws.com/getQuestionDetails/getquestiondetails?QuestionID=${parameter}`;
                
                  const response = await fetch(apiUrl);
              
                  if (!response.ok) {
                    throw new Error(`Request failed with status ${response.status}`);
                  }
                  const data = await response.json();
                  handledata(data[0]);
                  console.log(data)
                  console.log(realdata)
                  // return data;
                } catch (error) {
                  console.error("Error fetching data:", error);
                }
              }
              for (const parameter of selectedItems) {
                // console.log(parameter)
                fetchDataWithParameter(parameter.name)
              }
        },[selectedItems])
    const handelquiz = ()=>{
        navigate("/quiz")
    }

  return (
    <div className='home'>
        <div className="home_nav">
            <h1>Nioclass</h1>
        </div>
        <div className="home_body">
            <div className="home_body_left">
                <h1>Hello Welcome to Nioclass</h1>
                <h4> please provide your name to froward....</h4>

                <div className="home_input">
                    <input type="text" placeholder='Pushkar Chaubey' onChange={handelName}/>
                    <button onClick={handelquiz}>Enter</button>
                </div>


            </div>
            <div className="home_body_right">
                <h2>Please Provide Your Choice Of Question</h2>
                <CustomTable/>

            </div>
            
        </div>
    </div>
  )
}

export default Home