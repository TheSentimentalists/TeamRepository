import React from "react";
import Typography from '@material-ui/core/Typography';

function DisplayText({text}) {

    const [ text, setText ] = useState([
        { textDescription: 'test'}
      ]);

    return (
    <p>
    <Typography variant="body2"></Typography>
    <Typography variant="body2"></Typography>
    <Typography variant="body2"></Typography>
    </p>
    )

}

export default DisplayText;