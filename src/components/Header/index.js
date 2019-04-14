import React from "react";

const Header = (props) => {
    return(

<div className="jumbotron jumbotron-fluid mb-0">
  <div className="container">
    <h1 className="display-4 text-center">Advengers Guessing Game</h1>
    <h2 className="text-center">Score: {props.score}   High Score: {props.highScore}</h2>
  </div>
</div>

    );

}

export default Header;