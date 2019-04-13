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
  
  const clickedHeroArray = [];
  const currentHeroArray = this.state.heroArray;
  
  clickedHeroArray.push(id);

  this.setState({
    
    heroArray: [...currentHeroArray,clickedHeroArray]    
    
  });
  console.log(this.state.heroArray);


}
 
  render() {
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
