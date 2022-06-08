import { useState, useEffect, useContext } from 'react';
import GameContext from '../context/GameContext';
import gameCards from '../gameCards';
import GameCard from './GameCard';

function GameBoard() {
  const [isLoading, setIsLoading] = useState(true);
  const { cards, setCards, removedCards } = useContext(GameContext);

  useEffect(() => {
    if (cards.length < 1) {
      setIsLoading(true);
      const cardsWithPairs = [...gameCards, ...gameCards];
      const shuffledCards = cardsWithPairs.sort((a, b) => 0.5 - Math.random());
      const withId = shuffledCards.map((el, i) => ({ ...el, cardId: i }));
      setCards(withId);
      setIsLoading(false);
    }
    if (removedCards === 16) {
      alert('win');
    }
  }, [cards.length, setCards, removedCards]);

  return isLoading ? (
    <div>Loading</div>
  ) : (
    <div className='grid px-3 grid-cols-4 gap-4 game-board'>
      {cards.map((card, i) => (
        <GameCard
          key={i}
          cardId={card.cardId}
          image={card.image}
          pairId={card.pairId}
          isTurned={card.isTurned}
          isRemoved={card.isRemoved}
          toRemove={card.toRemove}
        />
      ))}
    </div>
  );
}
export default GameBoard;
