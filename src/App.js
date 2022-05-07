import './App.css';
import Header from './Components/Header';
import Record from './Components/Record';
import data from './Assets/characters.json';
import Houses from './Components/Houses';
import React, { useState } from 'react';

function App() {
  // characters, and score, best score so far.
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [houses, setHouses] = useState(data);

  function validateScore(e) {
    const data = e.target.getAttribute('data-name');
    let newHouses = houses.map( house => house);
    const house = newHouses.find( element => element.name === data);

    if (house.isClicked === true) {
      if (score > bestScore) setBestScore(score);
      // set all isClicked to false
      newHouses = houses.map(house => {
        house.isClicked = false;
        return house;
      });
      setScore(0);
    }
    else {
      house.isClicked = true;
      setScore(score + 1);
    }
    setHouses(shuffle(newHouses));
  }

  function shuffle(array) {

    for (let i = 0; i < array.length; i++) {
      const swapWith = Math.floor(Math.random() * array.length);
      const temp = array[i];
      array[i] = array[swapWith];
      array[swapWith] = temp;
    }

    return array;
  }

  return (
    <div>
      <Header/>
      <Record current={score} best={bestScore}/>
      <Houses houses={houses} validate={(e) => validateScore(e)}/>
    </div>
  );
}

export default App;
