import React, { useState, useCallback } from "react";

import Button from "./components/UI/Button/Button";
import DemoOutput from "./components/Demo/DemoOutput";
import "./App.css";

function App() {
  const [showPar, setShowPar] = useState(false);
  const [allowToggle, setAllowToggle] = useState(false);

  console.log('App is Running');

  const toggleParagraphHandler = useCallback(() => {
    if(allowToggle) {
      setShowPar((prevState) => !prevState);
    }
  }, [allowToggle]);
 
  const allowToggleHandler = () => {
    setAllowToggle(true);
  };

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <Button onClick={allowToggleHandler}>Allow Toggle</Button>
      <Button onClick={toggleParagraphHandler}>Toggle Paragraph</Button>
      <DemoOutput show={showPar}/>
    </div>
  );
}

export default App;
