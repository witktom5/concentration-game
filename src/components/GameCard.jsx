import { useContext, useEffect, useState } from 'react';
import GameContext from '../context/GameContext';
import reverse from '../assets/img/reverse.jpg';

function GameCard({ image, cardId, pairId, isTurned }) {
  const [twoSelected, setTwoSelected] = useState(false);
  const { cards, setCards, selectedCards, setSelectedCards } =
    useContext(GameContext);

  // turn a card

  const turnCard = (id, id2) => {
    setCards(
      cards.map((card) => {
        if (card.cardId === id || card.cardId === id2) {
          return { ...card, isTurned: !isTurned };
        }
        return card;
      })
    );
  };

  useEffect(() => {
    if (twoSelected) {
      console.log(selectedCards);
      if (selectedCards[0].pairId === selectedCards[1].pairId) {
        console.log('match');
      }

      setTimeout(() => {
        turnCard(selectedCards[0].cardId, selectedCards[1].cardId);
        setTwoSelected(false);
        setSelectedCards([]);
      }, 2000);
    }
  }, [twoSelected]);

  // on card click

  const handleCardClick = () => {
    if (selectedCards.length === 2) return; //  If 2 cards are selected no effect on click untill they flip back
    if (isTurned) return;
    if (selectedCards.length === 1) setTwoSelected(true);
    turnCard(cardId);
    setSelectedCards([...selectedCards, { pairId, cardId }]);
  };

  return (
    <div className='game-card select-none' onClick={handleCardClick}>
      <div className={isTurned ? 'inner turned' : 'inner'}>
        <div className='back'>
          <img src={image} alt='' />
        </div>
        <div className='front'>
          <img src={reverse} alt='' />
        </div>
      </div>
    </div>
  );
}
export default GameCard;
