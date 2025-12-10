import { useState } from 'react';

export const useGameLogic = (cardValues) => {
  const shuffleArray = (array) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  const createInitialCards = () => {
    const shuffled = shuffleArray(cardValues);
    return shuffled.map((value, idx) => ({
      id: idx,
      value,
      isFlipped: false,
      isMatched: false,
    }));
  };

  const [cards, setCards] = useState(createInitialCards);
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);
  const [score, setScore] = useState(0);
  const [moves, setMoves] = useState(0);
  const [isLocked, setIsLocked] = useState(false);

  const initializeGame = () => {
    setCards(createInitialCards());
    setIsLocked(false);
    setMoves(0);
    setScore(0);
    setFlippedCards([]);
    setMatchedCards([]);
  };

  // useEffect(() => {
  //   initializeGame();
  // }, []);

  const handleCardClick = (card) => {
    if (
      card.isFlipped ||
      card.isMatched ||
      isLocked ||
      flippedCards.length === 2
    )
      return;

    const updatedCards = cards.map((c) =>
      c.id === card.id ? { ...c, isFlipped: true } : c
    );
    setCards(updatedCards);

    const newFlippedCards = [...flippedCards, card.id];
    setFlippedCards(newFlippedCards);

    if (flippedCards.length === 1) {
      setIsLocked(true);
      const firstCard = cards[flippedCards[0]];

      if (firstCard.value === card.value) {
        setTimeout(() => {
          setMatchedCards((prev) => [...prev, firstCard.id, card.id]);
          setScore((prev) => prev + 1);

          setCards((prev) =>
            prev.map((c) =>
              c.id === card.id || c.id === firstCard.id
                ? { ...c, isMatched: true }
                : c
            )
          );

          setFlippedCards([]);
          setIsLocked(false);
        }, 500);
      } else {
        setTimeout(() => {
          const flippedBackCard = updatedCards.map((c) => {
            return newFlippedCards.includes(c.id)
              ? { ...c, isFlipped: false }
              : c;
          });

          setCards(flippedBackCard);
          setFlippedCards([]);
          setIsLocked(false);
        }, 1000);
      }
      setMoves((prev) => prev + 1);
    }
  };

  const isGameCompleted = matchedCards.length === cardValues.length;

  return {
    cards,
    score,
    moves,
    isGameCompleted,
    handleCardClick,
    initializeGame,
  };
};
