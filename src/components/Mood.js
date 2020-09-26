import React from "react";
import Typography from '@material-ui/core/Typography';


function Mood({moodToday}){
 return (
     <div>
     <Typography variant="body2">
 Your mood today is: <Typography variant="overline">{moodToday.mood}</Typography>
     </Typography>
     </div>
 )
}

export default Mood;