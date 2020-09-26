import React from "react";
import Typography from '@material-ui/core/Typography';

function WordOfDay(props){
    return(
        <div>
            <Typography variant="body2">Your word of the day is: {props.displayWordOfDay.word}</Typography>
        </div>
    )
}


export default WordOfDay;