import { createContext, useState } from 'react';

const GameContext = createContext();

export const GameProvider = ({ children }) => {
  const [moves, setMoves] = useState(0);
  const [cards, setCards] = useState([]);
  const [selectedCards, setSelectedCards] = useState([]);
  const [removedCards, setRemovedCards] = useState(0);

  return (
    <GameContext.Provider
      value={{
        cards,
        selectedCards,
        removedCards,
        moves,
        setCards,
        setSelectedCards,
        setRemovedCards,
        setMoves,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export default GameContext;
