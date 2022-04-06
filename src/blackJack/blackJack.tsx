import React, { useEffect, useState } from "react";
import {
  cardsDelt,
  gameIsOver,
  gameResults,
  suitsAndValues,
  suitsToUnicode,
} from "./cardFunctions";
import { Card } from "./cardInterfaces";
const displayCard = (suit:string ,rank: (string | number) )=>{
  return <div className={`card rank-${rank} ${suit}`}>
          <span className="rank">{rank}</span>
          <span className="suit">{suitsToUnicode (suit , rank)}</span>
      </div>;
}
export function BlackJack() {
  const [userHasHold, setUserHasHold] = useState(false);
  const [userCards, setUserCards] = useState<Card[]>([]);
  const [houseCards, setHouseCards] = useState<Card[]>([]);
  useEffect(() => {
    handleReset();
  }, []);
  const handleClick = () => {
    const result = cardsDelt(suitsAndValues);
    setUserCards([...userCards, result]);
  };
  const handleClick2 = () => {
    const result = cardsDelt(suitsAndValues);
    setHouseCards([...houseCards, result]);
  };

  const handleReset = () => {
    // setUserCards([]);
    // setHouseCards([]);
    setUserHasHold(false);
    setUserCards([cardsDelt(suitsAndValues), cardsDelt(suitsAndValues)]);
    setHouseCards([cardsDelt(suitsAndValues), cardsDelt(suitsAndValues)]);
  };
  const handleHold = () => {
    setUserHasHold(true);
  };

  const totalCards = (userCards: Card[]) => {
    let sumOfCards = 0;
    for (let index = 0; index < userCards.length; index++) {
      const element = userCards[index];
      sumOfCards = sumOfCards + element.value;
    }
    return sumOfCards;
  };
  const sumOfUserCards = totalCards(userCards);
  const canUserPlay = !(sumOfUserCards >= 21) && !userHasHold;
  const sumOfHouseCards = totalCards(houseCards);
  const canHousePlay = sumOfHouseCards <= 16;

  const isGameOver = gameIsOver(userHasHold, sumOfUserCards, sumOfHouseCards);

  return (
    <div>
      <div>
        <button
          type="button"
          onClick={() => handleClick()}
          disabled={!canUserPlay}
        >
          userCards
        </button>
        {totalCards(userCards)}
        <div>
          <button type="button" onClick={() => handleHold()}>
            Hold
          </button>
        </div> 
        <div className="playingCards faceImages ">{userCards.map((i) => {
          // eslint-disable-next-line react/jsx-key
          return  displayCard(i.suit , i.rank)
        })}</div> 
      </div>
      <div>
        <button
          type="button"
          onClick={() => handleClick2()}
          disabled={!canHousePlay}
        >
          houseCards
        </button>
        {totalCards(houseCards)}<div className="playingCards faceImages">
        {houseCards.map((i) => {
          // eslint-disable-next-line react/jsx-key
          return displayCard(i.suit, i.rank)
        })}</div>
        {suitsAndValues.length}
        <button type="button" onClick={() => handleReset()}>
          Reset
        </button>
      </div>
      <div>{isGameOver ? "Game Over" : ""}</div>
      {isGameOver && gameResults(sumOfHouseCards, sumOfUserCards)}
    </div>
  );
}

// game over
//if the player has Hold, and the house has 17
// if the player is bust, then the game is over
//if the player has less than the house, the game is over
