import React, { useState } from 'react';

export default function About() {

  const [mystyle, setmystyle] = useState({
    backgroundColor: 'black',
    color: 'white'

  });
  const lightBg = () => {
    setmystyle({
      backgroundColor: 'white',
      color: 'black'

    })
  }
  const DarkBg = () => {
    setmystyle({
      backgroundColor: 'black',
      color: 'white'

    })
  }

  return (
    <>
       <h1  className="text-secondary">About Us</h1>
      <div className='container my-3' style={mystyle}>
        <div className='my-3'>
          <div>
            <p>Text utils is a web application to perform different text operations.</p>
            <p>It provides the following features.</p>
            <ul>
              <li>Convert text to Uppercase</li>
              <li>Convert text to Lowercase</li>
              <li>Clear Text</li>
              <li>Copy Text</li>
              <li>Remove ExtraSpaces</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container my-3">
        <button className="btn btn-primary mx-2" onClick={lightBg}>Change light background color</button>
        <button className="btn btn-primary mx-2 my-3" onClick={DarkBg}>Change dark background color</button>
      </div>
    </>
  );
}