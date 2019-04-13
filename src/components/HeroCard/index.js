import React from "react";
import "./style.css";

const HeroCard = props => {
    return (
        <div ClassName = "card">
            <div onClick={() => props.clickHeroFunction(props.id)} ClassName = "img-container">
               <img alt={props.name} src={props.image}/>                          
            </div> 
        </div>
        
    );
}

export default HeroCard;