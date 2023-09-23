import "./App.css";
import Home from "./components/home/Home";
import Question from "./components/question/Question";
import { MathJaxContext } from "better-react-mathjax";
import {DataProvider} from "./DataContext"
import {Route,Routes} from "react-router-dom";
import Final from "./components/final/Final";

function App() {
  return (
    
    <DataProvider>
      <MathJaxContext>
        <div className="App">
          
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/quiz" element={<Question/>}/>
          <Route exact path="/final" element={<Final/>}/>
        </Routes>


        </div>
      </MathJaxContext>
    </DataProvider>
  );
}

export default App;
