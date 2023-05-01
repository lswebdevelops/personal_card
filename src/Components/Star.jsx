import React from "react";
import '../Styles/Content.css';
import starIcon from '../Images/star.png';
import yellowStarIcon from '../Images/yellowStar.png';

function Star(props){
    let iconStar = props.isFilled ? yellowStarIcon: starIcon;
    return(
         <img          
         className="card-favorite"
         src={iconStar} 
         onClick={props.handleClick}
         alt="star"
          />
    )
}

export default Star;


