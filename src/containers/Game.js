import { useEffect, useState } from "react";

const Game = ({ deck, newGame }) => {
    const [dealer, setDealer] = useState({name: "Dealer", cards: [], bust: false});
    const [player, setPlayer] = useState({name: "You", cards: [], bust: false, playing: true});
  
    useEffect(() => {
        if(deck.length !== 0){
            startGame()
        }
    }, [deck]);

    const startGame = () => {
        const dealerCopy = {...dealer};
        const playerCopy = {...player};
  
        for (let i = 0; i < 2; i++){
          addCard(playerCopy);
          addCard(dealerCopy);
        }
        setDealer(dealerCopy);
        setPlayer(playerCopy);
    }

    const addCard = (participant) => {
        participant.cards.push(deck[0]);
        deck.shift();
      }

      const resetGame = () => {
        setDealer({name: "Dealer", cards: [], bust: false});
        setPlayer({name: "You", cards: [], bust: false, playing: true});
        newGame()
      }

    if (dealer.cards.length === 0) {
        return null
    }

    return (
        <div className="App">
            <button onClick={resetGame}>New Game</button>
            <img src={dealer.cards[0].image} />
        </div>
    )
}

export default Game;