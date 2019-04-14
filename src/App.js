import React, { Component } from 'react';
import logo from './logo.svg';
import Header from "./components/Header"
import Wrapper from "./components/wrapper"
import HeroCard from './components/HeroCard'
import hero from './hero.json'
import './App.css';

class App extends Component {
 state = {
    hero: hero,
    heroArray: [],
    score: 0,
    highScore:0  
 };

clickHeroFunction = id => {
  
  let clickedHeroArray = this.state.heroArray;

  if(clickedHeroArray.indexOf(id) === -1)
    {
      console.log("YOU GUESSED CORRECTLY!!!!!")




      clickedHeroArray.push(id)
      this.setState({
        
        heroArray: clickedHeroArray,
        score: this.state.score+1,
        hero: this.shuffleHero(hero)

      })

      if(this.state.score >= this.state.highScore)
      {
        
        this.setState({highScore: this.state.score+1})
      }

    }
    else{
      console.log("WRONG!!!!");
          
      this.setState({
    
        heroArray: [],
        score: 0   
      });
    }
    

}

//Using Fisher-Yates shuffle to shuffle array
shuffleHero = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]]; 
  }
  return array
}


  render() {
    // console.log(this.state.heroArray);
    // console.log(this.state.score);
  return (
    
    <div>
    <Header
    score={this.state.score}
    highScore={this.state.highScore}/>
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
    </div>
    )
    
}
}

export default App;
