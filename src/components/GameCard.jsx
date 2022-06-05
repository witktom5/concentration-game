import { useState } from 'react';
import reverse from '../assets/img/reverse.jpg';

function GameCard({ image, pairId }) {
  const [isTurned, setIsTurned] = useState(false);
  return (
    <div className={`game-card`} onClick={() => setIsTurned(!isTurned)}>
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
