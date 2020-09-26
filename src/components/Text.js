import React from "react";
import Typography from '@material-ui/core/Typography';
import WordOfDay from '../components/WordOfDay';


function Text(props){
 return (
<div>
 <Typography variant="body2">{props.displayGreeting}<br/>
 Now it's time to {props.displayActivity}<br/>
 Your colour of the day is {props.displayColour}<br/>
 Read this: {props.displayBlurb}<br/>
 {props.displayMoreBlurb}<br/>
 </Typography>
 <WordOfDay></WordOfDay>
</div>
 )
}

/*The prop displayGreeting is the the state being passed to the Text component
App is the parent, text is the child
Text is reading the state contained in App
It will not change the prop
The props word can be used for any prop*/



export default Text;    