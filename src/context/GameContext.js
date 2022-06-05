import { createContext, useState } from 'react';

const GameContext = createContext();

export const GameProvider = ({ children }) => {
  const [cards, setCards] = useState([]);
  const [selectedCards, setSelectedCards] = useState([]);

  return (
    <GameContext.Provider
      value={{
        cards,
        selectedCards,
        setCards,
        setSelectedCards,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export default GameContext;
