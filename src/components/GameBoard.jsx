import { useState, useEffect, useContext } from 'react';
import GameContext from '../context/GameContext';
import gameCards from '../gameCards';
import GameCard from './GameCard';

function GameBoard() {
  const [isLoading, setIsLoading] = useState(false);
  const { cards, setCards, removedCards, setRemovedCards, moves, setMoves } =
    useContext(GameContext);

  useEffect(() => {
    if (cards.length < 1) {
      setIsLoading(true);
      const cardsWithPairs = [...gameCards, ...gameCards];
      const shuffledCards = cardsWithPairs.sort((a, b) => 0.5 - Math.random());
      const withId = shuffledCards.map((el, i) => ({ ...el, cardId: i }));
      setCards(withId);
      setIsLoading(false);
    }
  }, [cards, setCards, removedCards]);

  const onNewGame = () => {
    setCards([]);
    setRemovedCards(0);
    setMoves(0);
    setIsLoading(true);
  };

  return isLoading ? (
    <div>Loading</div>
  ) : (
    <>
      {removedCards < 16 ? (
        <div className='grid px-3 grid-cols-4 gap-2 md:gap-5 game-board p-5 md:p-10 pb-4 md:pb-4'>
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
          <div className='text-neutral-content col-span-3 place-self-start'>
            Points: {removedCards > 0 ? removedCards / 2 : 0}
          </div>
          <div className='text-neutral-content'>Moves: {moves}</div>
        </div>
      ) : (
        <div className='game-over-screen bg-neutral text-neutral-content text-center'>
          <h2 className='text-4xl font-bold pb-8'>Congratulations, you win!</h2>
          <p className='text-xl'>
            You've succesfully collected all the pairs in {moves} moves.
          </p>
          <p className='text-xl'>Do you want to play again?</p>
          <button className='btn btn-success mt-8 btn-lg' onClick={onNewGame}>
            Play again
          </button>
        </div>
      )}
    </>
  );
}
export default GameBoard;
