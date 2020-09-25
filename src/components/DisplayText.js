import React, { useState }  from "react";
import Typography from '@material-ui/core/Typography';

function DisplayText() {
    const [ text, setText ] = useState([
        { text: "Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro." },
        { text: "De carne lumbering animata corpora quaeritis."},
        { text: "Summus brains sit​​, morbo vel maleficia?"}
    ]);/*useState is defining the state of the DisplayText component, the array contains the current state (an array with 3 text objects)
            The setText is the function that will be used to update the state */


    return (
    <p>
    <Typography variant="body2"></Typography>
    <Typography variant="body2"></Typography>
    <Typography variant="body2"></Typography>
    </p>
    )

}

export default DisplayText;