import React from "react";
import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Text from "./components/Text";

function App() {
  const text = "test"; //declaring a variable with a value stored in it, the variable is passed to the Text compoent as a prop(like an HTML attribute)

  return (
    <div className="App">
      <Header></Header>
      
      <Text displayText={text}></Text>
    </div>
  );
}

export default App;
