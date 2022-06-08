import { useState, useEffect, useContext } from 'react';
import GameContext from '../context/GameContext';
import gameCards from '../gameCards';
import GameCard from './GameCard';

//  images for preload
import Image1 from '../assets/img/1.jpg';
import Image2 from '../assets/img/2.jpg';
import Image3 from '../assets/img/3.jpg';
import Image4 from '../assets/img/4.jpg';
import Image5 from '../assets/img/5.jpg';
import Image6 from '../assets/img/6.jpg';
import Image7 from '../assets/img/7.jpg';
import Image8 from '../assets/img/8.jpg';
import reverse from '../assets/img/reverse.jpg';
import bg from '../assets/img/bg.jpg';
//

function GameBoard() {
  const [imgsLoading, setImgsLoading] = useState(true);
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

  return isLoading || imgsLoading ? (
    <>
      <div className='opacity-0 absolute'>
        <img src={Image1} alt='' />
        <img src={Image2} alt='' />
        <img src={Image3} alt='' />
        <img src={Image4} alt='' />
        <img src={Image5} alt='' />
        <img src={Image6} alt='' />
        <img src={Image7} alt='' />
        <img src={Image8} alt='' />
        <img src={bg} alt='' />
        <img src={reverse} onLoad={setImgsLoading(false)} alt='' />
      </div>
      <div>Loading</div>
    </>
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
