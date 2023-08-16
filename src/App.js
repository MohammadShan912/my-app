import React, { useState } from 'react';
import './App.css';
// import About from './components/About';
import NavBar from './components/NavBar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
// import { Routes, Route } from 'react-router-dom';

function App() {
  const [mode, setMode] = useState('light'); // Whether dark mode is enable or not.
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
      displayAlert('Darth Mode Has Been Enabled', 'success');
      // setInterval(() => {
      //   document.title = 'ManiText - Dark Mode';
      // }, 1500);
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      displayAlert('Light Mode Has Been Enabled', 'success');
      // setInterval(() => {
      //   document.title = 'ManiText - Light Mode';
      // }, 2000);
    }
  }

  // My Solution
  // const [mode1, setMode1] = useState('light'); // Whether dark mode is enable or not.
  // const toggleMode1 = () => {
  //   if (mode1 === 'light') {
  //     setMode1('primary');
  //     document.body.style.backgroundColor = 'blue';
  //     displayAlert('Blue Mode Has Been Enabled', 'success');
  //   }
  //   else if (mode1 === 'dark') {
  //     setMode1('primary');
  //     document.body.style.backgroundColor = 'blue';
  //     displayAlert('Blue Mode Has Been Enabled', 'success');
  //   }
  //   else {
  //     setMode1('light');
  //     document.body.style.backgroundColor = 'white';
  //     displayAlert('Light Mode Has Been Enabled', 'success');
  //   }
  // }

  const [alert, setAlert] = useState(null);
  const displayAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }

  return (
    <>
      {/* NavBar Component */}
      <NavBar title="Dummy 1" firstItem="Enter Text" secondItem="Edit Text" mode={mode} toggleMode={toggleMode} /*mode1={mode1}*/ /*toggleMode1={toggleMode1}*/ />

      {/* Alert Component */}
      <Alert alert={alert} />

      <div className="container my-3">
        {/* <Routes> */}
        {/* Text Form Component */}
        <TextForm displayAlert={displayAlert} heading="Enter the text that needs to be transformed" mode={mode} />
        {/* <Route exact path="/" element={<TextForm displayAlert={displayAlert} heading="Enter the text that needs to be transformed" mode={mode} />} /> */}

        {/* About  Componenet */}
        {/* <Route exact path="/about" element={<About />} /> */}
        {/* </Routes> */}
      </div>
    </>
  );
}
export default App;
