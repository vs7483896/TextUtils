// import logo from './logo.svg';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import About from './components/About.js';
import Navbar from './components/Navbar.js';  // syntax to import any component(function) from js files
// import { Component } from 'react';
import TextConverter from './components/Textform.js';
import Alert from './components/Alert.js';
import React, { useState } from 'react';



// let name=(<b>Lecture1</b>);
function App() {

  const [mode, setMode] = useState("dark");
  const [alert, setAlert] = useState("null");  // this hook state we used to keep details of alert

  // const changeBGRemovecls=()=>{
  //   document.body.classList.remove('bg-primary');
  //   document.body.classList.remove('bg-secondary');
  //   document.body.classList.remove('bg-danger');
  //   document.body.classList.remove('bg-light');
  //   document.body.classList.remove('bg-dark');
  
  // }
  const changeBg = ({/*cls*/}) => {
    if (mode === "dark") {
      setMode('light');
      showAlert(':Light mode is enabled', 'success');
      document.body.style.backgroundColor = '#e5e3dc';  //this is syntax to set background color in application div
      document.title = 'TextUtils - light mode';
    }
    else {
      setMode('dark');
      showAlert(':Dark mode is enabled', 'success');
      document.body.style.backgroundColor = '#0b3244';
      document.title = 'TextUtils - dark mode';  // syntax to change document title 

      // setInterval(()=>{
      //   document.title = 'TextUtils - Install now';
      // },1500)

      // setInterval(()=>{
      //   document.title = 'TextUtils - Exciting offers!';
      // },2000)

    }
  }

  const changeDmode = (modeFlag) => {

    if (modeFlag === '#5a0707')
      document.body.style.backgroundColor = '#5a0707';

    else if (modeFlag === '#453f05')
      document.body.style.backgroundColor = '#453f05';

    else if (modeFlag === 'pink')
      document.body.style.backgroundColor = 'pink';

    else if (modeFlag === 'grey')
      document.body.style.backgroundColor = 'grey';

    else if (modeFlag === 'violet')
      document.body.style.backgroundColor = 'violet';

    else
      document.body.style.backgroundColor = 'white';
  }

  const showAlert = (msg, type) => {   // we have created this function to use in dismissing division
    setAlert(
      {
        msg: msg,
        type: type
      }
    )
    setTimeout(() => { // setTimeout is use show that aleart should be dismissed autometically after 1.5seconds
      setAlert({
        msg: "",
        type: ""
      });
    }, 1500);
  }
  return (
    <>    
      <Router>
        <Navbar title="textUtils" aboutText="About Us" mode={mode} chBG={changeBg} chDM={changeDmode} />
        <Alert alert={alert} />
        <div className="container">
          <Routes>
            <Route path="/" element={<TextConverter header="Text Case Converter" mode={mode} alert={showAlert} />}/>
            <Route path="/home" element={<TextConverter header="Text Case Converter" mode={mode} alert={showAlert} />}/>
            <Route path="/about" element={<About />}/>
          </Routes>
        </div>
        {/*   here we are calling navbar function and passing two props data, props are same as arguments passed during normal function call */}
        {/* <Navbar  aboutText="About us"/> */}
      </Router>
    </>
  );
}

export default App;
