import React from "react";
import "./style.css";

function HeroCard(props) {
    return (
        <div ClassName = "card">
            <div ClassName = "img-container">
                <img alt={props.name} src={props.image}/>
            </div>
        </div>
    );
}

export default HeroCard;