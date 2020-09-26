import React from "react";
import Typography from '@material-ui/core/Typography';

function WordOfDay({wordOfDay}){
    return(
        <div>
            <Typography variant="body2">Your word of the day is: {wordOfDay.word}</Typography>
        </div>
    )
}


export default WordOfDay;