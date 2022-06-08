import { useContext, useEffect, useState, useCallback } from 'react';
import GameContext from '../context/GameContext';
import reverse from '../assets/img/reverse.jpg';

function GameCard({ image, cardId, pairId, isTurned, isRemoved }) {
  const [twoSelected, setTwoSelected] = useState(false);
  const {
    cards,
    setCards,
    selectedCards,
    removedCards,
    setSelectedCards,
    setRemovedCards,
    setMoves,
    moves,
  } = useContext(GameContext);

  // flip a card/cards

  const turnCard = useCallback(
    (id, id2) => {
      setCards(
        cards.map((card) => {
          if (card.cardId === id || card.cardId === id2) {
            return { ...card, isTurned: !isTurned };
          }
          return card;
        })
      );
    },
    [cards, isTurned, setCards]
  );

  useEffect(() => {
    if (twoSelected) {
      if (selectedCards[0].pairId === selectedCards[1].pairId) {
        setTimeout(() => {
          setCards(
            cards.map((card) => {
              if (card.pairId === pairId) {
                return { ...card, isRemoved: true };
              }
              return card;
            })
          );
          setRemovedCards(removedCards + 2);
          setTwoSelected(false);
          setSelectedCards([]);
        }, 750);
      } else {
        setTimeout(() => {
          turnCard(selectedCards[0].cardId, selectedCards[1].cardId);
          setTwoSelected(false);
          setSelectedCards([]);
        }, 1200);
      }
    }
  }, [
    twoSelected,
    selectedCards,
    setSelectedCards,
    turnCard,
    cards,
    removedCards,
    pairId,
    setCards,
    setRemovedCards,
    moves,
    setMoves,
  ]);

  // on card click

  const handleCardClick = () => {
    if (selectedCards.length === 2) return; //  If 2 cards are selected no effect on click untill they flip back
    if (isTurned) return;
    if (selectedCards.length === 1) {
      setMoves(moves + 1);
      setTwoSelected(true);
    }
    turnCard(cardId);
    setSelectedCards([...selectedCards, { pairId, cardId }]);
  };

  return (
    <div
      className={`game-card select-none ${isRemoved ? 'removed' : ''}`}
      onClick={isRemoved ? undefined : handleCardClick}
    >
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
