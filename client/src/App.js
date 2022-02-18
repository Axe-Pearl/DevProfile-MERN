import './App.css';
import Register from './Components/Register';
import Login from "./Components/Login";
import About from './Components/About';
import {Routes, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <h1>Hello frontend here</h1>
      <Routes>
        <Route exact path='/' element={<><Register/></>}></Route>
        <Route path='/login' element={<><Login/></>}></Route>
        <Route path='/about' element={<><About/></>}></Route>
      </Routes>
    </div>
  );
}

export default App;
