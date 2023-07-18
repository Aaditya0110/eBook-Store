import React from "react";
import Rating from '@mui/material/Rating';
import './Review.css';
function Review(){
    return(
     <div className="rview">
         <h4>Name</h4>
         <div><Rating/></div>
         <div>Review:</div>
     </div>
    )
}

export default Review;
