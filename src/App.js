import {useState, useEffect} from 'react';
import './App.css';
import Game from './containers/Game.js'

function App() {

  const [deck, setDeck] = useState([]);
  
  useEffect(() => {
    getCards();
  }, [])


  const getCards = () => {
    fetch("http://localhost:8080/api/decks")
    .then(res => res.json())
    .then(data => {
      setDeck(data[0].cards)
    }) 
  }
  const newGame = () => {
    fetch(`http://localhost:8080/api/decks/new`, {
      method: "POST",
      headers: { "Content-Type": "application/json" }
    })
    .then(() => getCards())
  }

  if (!deck) {
    return null
  }

  return (
    <Game deck={deck} newGame={newGame} />
  );
}

export default App;
