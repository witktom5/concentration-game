import { useState, useEffect } from 'react';
import gameCards from '../gameCards';
import GameCard from './GameCard';

function GameBoard() {
  const [isLoading, setIsLoading] = useState(true);
  const [cards, setCards] = useState([]);
  const [selectedCards, setSelectedCards] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    const cardsWithPairs = [...gameCards, ...gameCards];
    const shuffledCards = cardsWithPairs.sort((a, b) => 0.5 - Math.random());
    setCards(shuffledCards);
    setIsLoading(false);
  }, []);

  return isLoading ? (
    <div>Loading</div>
  ) : (
    <div className='grid px-3 grid-cols-4 gap-4'>
      {cards.map((card) => (
        <GameCard image={card.image} pairId={card.pairId} />
      ))}
    </div>
  );
}
export default GameBoard;
