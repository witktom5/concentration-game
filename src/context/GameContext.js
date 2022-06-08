import { createContext, useState } from 'react';

const GameContext = createContext();

export const GameProvider = ({ children }) => {
  const [cards, setCards] = useState([]);
  const [selectedCards, setSelectedCards] = useState([]);
  const [removedCards, setRemovedCards] = useState(0);

  return (
    <GameContext.Provider
      value={{
        cards,
        selectedCards,
        removedCards,
        setCards,
        setSelectedCards,
        setRemovedCards,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export default GameContext;
