import { Card } from './components/Card';
import { GameHeader } from './components/GameHeader';
import { WinMessage } from './components/WinMessage';
import { useGameLogic } from './hooks/useGameLogic';

const cardValues = [
  '🍎',
  '🍌',
  '🍇',
  '🍊',
  '🍓',
  '🥝',
  '🍑',
  '🍒',
  '🍎',
  '🍌',
  '🍇',
  '🍊',
  '🍓',
  '🥝',
  '🍑',
  '🍒',
];

function App() {
  const {
    cards,
    score,
    moves,
    isGameCompleted,
    handleCardClick,
    initializeGame,
  } = useGameLogic(cardValues);

  return (
    <div className='app'>
      <GameHeader score={score} moves={moves} onReset={initializeGame} />
      {isGameCompleted && <WinMessage moves={moves} />}

      <div className='cards-grid'>
        {cards.map((card, idx) => (
          <Card key={idx} card={card} onClick={handleCardClick} />
        ))}
      </div>
    </div>
  );
}

export default App;
