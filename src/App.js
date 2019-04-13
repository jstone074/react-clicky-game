import React, { Component } from 'react';
import logo from './logo.svg';
import Wrapper from "./components/wrapper"
import HeroCard from './components/HeroCard'
import hero from './hero.json'
import './App.css';

class App extends Component {
 state = {
    hero,
    heroArray: [],
    score: 0   
 };

clickHeroFunction = id => {
  
  let clickedHeroArray = this.state.heroArray;
  let checker = clickedHeroArray.includes(id);

  if(clickedHeroArray.indexOf(id) === -1)
    {
      console.log("YOU GUESSED CORRECTLY!!!!!")

      clickedHeroArray.push(id)
      this.setState({
        
        heroArray: clickedHeroArray,
        score: this.state.score+1 
      })
    }
    else{
      console.log("WRONG!!!!");
          
      this.setState({
    
        heroArray: [],
        score: 0   
      });
    }

  // console.log("This is my guess score value...",guessScore);


}
 
  render() {
    // console.log(this.state.heroArray);
    // console.log(this.state.score);
  return (
    <Wrapper>
      {this.state.hero.map(props =>
      <HeroCard
        key={props.id}
        id={props.id}
        image={props.image}
        clickHeroFunction={this.clickHeroFunction}                 
      />
      )}
    </Wrapper>
    
    )
    
}
}

export default App;
