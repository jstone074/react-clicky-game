import React from "react";
import "./style.css";

const HeroCard = props => {
    return (
        <div className = "card border border-dark m-2">
            <div onClick={() => props.clickHeroFunction(props.id)} className = "img-container">
               <img alt={props.name} src={props.image}/>                          
            </div> 
        </div>
        
    );
}

export default HeroCard;