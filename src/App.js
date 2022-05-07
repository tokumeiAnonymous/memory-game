import './App.css';
import Header from './Components/Header';
import Record from './Components/Record';
import data from './Assets/characters.json';
import Houses from './Components/Houses';
import React, { useState /*, useEffect */} from 'react';

function App() {
  // characters, and score, best score so far.
  const [score, setScore] = useState(0);
  const [maxScore, setMaxScore] = useState(0);
  const [houses, setHouses] = useState(data);
  /*
  useEffect( () => {
    setHouses(shuffle(houses));
  })
  */
  function validateScore(e) {
    const data = e.target.getAttribute('data-name');
    const house = houses.find( element => element.name === data)

    if (house.isClicked === true) {
      if (score > maxScore) setMaxScore(score);
      // set all isClicked to false
      houses.forEach(house => house.isClicked = false);
      setScore(0);
    }
    else {
      house.isClicked = true;
      setScore(score + 1);
    }
    setHouses(shuffle(houses));
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
      <Record current={score} max={maxScore}/>
      {/* return a list of characters here from the json file */}
      <Houses houses={houses} validate={(e) => validateScore(e)}/>
    </div>
  );
}

export default App;
