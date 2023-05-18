import { useEffect, useState } from 'react';

export enum GameState {
  IDLE,
  RUNNING,
  STOPPED,
};

const DEFAULT_TIME = 5;

export function useGameState() {
  const [gameState, setGameState] = useState(GameState.IDLE);
  const [timeRemaining, setTimeRemaining] = useState(DEFAULT_TIME);

  function startGame(time = DEFAULT_TIME) {
    setGameState(GameState.RUNNING);
    setTimeRemaining(time);
  }

  function stopGame() {
    setGameState(GameState.STOPPED);
  }

  useEffect(() => {
    if (gameState === GameState.IDLE || gameState === GameState.STOPPED) return;

    if (timeRemaining <= 0) {
      stopGame();
      return;
    }

    const timeoutId = setTimeout(() => {
      setTimeRemaining((time) => time - 1);
    }, 1000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [gameState, timeRemaining]);

  return {
    gameState,
    timeRemaining,
    startGame,
  };
}
