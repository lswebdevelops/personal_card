import React from "react";
import '../Styles/Content.css';

function Star(props){
    
    return(
         <img          
         className="card-favorite"
         src={props.isFilled} 
         alt="star"
          />
    )
}

export default Star;


