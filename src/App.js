import React from "react";
import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Text from "./components/Text";


function App() {
  const text = "test"; 
  //declaring a variable with a value stored in it, the variable is passed to the Text compoent as a prop(like an HTML attribute)

  const name = "Lucy Goosey";
const greeting = "How are you?";
 const activity = "Buy some coffee";
 const colour = "Magenta";

 const [blurb] = useState("Leggings bertelli gucci, work it girl opening strut would her never design.");


 return (
    <div className="App">
      <Header></Header>

      <div>
        <p>Hello {name}</p>
  <p>This is a {text}</p>
  <Text displayGreeting={greeting} displayActivity={activity} displayColour={colour}></Text>
 <p>{blurb}</p>
      </div>
      
    </div>
  );
}

export default App;
/*variables name and text are state that is being accessed directly in App. The values are passed directly to some JSX, 
bypassing any child components. blurb useState is doing exactly the same as this.
greeting is passed as a prop to Text which renders it in Text component, which is rendered in App*/
