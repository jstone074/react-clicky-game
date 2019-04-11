import React, { Component } from 'react';
import logo from './logo.svg';
import Wrapper from "./components/wrapper"
import HeroCard from './components/HeroCard'
import hero from './hero.json'
import './App.css';

class App extends Component {
 state = {
    hero
   
 };
 
  render() {
    return (
    <Wrapper>
      {this.state.hero.map(props =>
      <HeroCard
        image={props.image}      
      />
      )}
    </Wrapper>
    )
    
}
}

export default App;
