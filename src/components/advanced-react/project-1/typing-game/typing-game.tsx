import styles from './typing-game.module.css';
import { ChangeEvent, useState } from 'react';
import { useEffect } from 'react';

enum GameState {
  IDLE,
  RUNNING,
  STOPPED,
};

const DEFAULT_TIME = 5;

function countWords(text: string) {
  const words = text.split(' ').filter((word) => word !== '');
  return words.length;
}

export function TypingGame() {
  const [typedText, setTypedText] = useState('');
  const [gameState, setGameState] = useState(GameState.IDLE);
  const [timeRemaining, setTimeRemaining] = useState(DEFAULT_TIME);
  const [score, setScore] = useState(0);

  function handleChange(e: ChangeEvent<HTMLTextAreaElement>) {
    const { value } = e.target;
    setTypedText(value);
  }

  function handleStartGame() {
    setGameState(GameState.RUNNING);
    setScore(0);
    setTimeRemaining(DEFAULT_TIME);
    setTypedText('');
  }

  function stopGame() {
    setGameState(GameState.STOPPED);
    setScore(countWords(typedText));
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

  return (
    <main className={styles.container}>
      <h1 className={styles.title}>How fast do you type?</h1>

      <div className={styles.gameArea}>
        <textarea
          className={styles.textarea}
          name="typedText"
          value={typedText}
          onChange={handleChange}
          disabled={gameState !== GameState.RUNNING}
        />

        <h4>Time remaining: {timeRemaining}</h4>

        <button
          className={styles.startButton}
          onClick={handleStartGame}
          disabled={gameState === GameState.RUNNING}
        >
          {gameState === GameState.STOPPED ? 'Restart' : 'Start'}
        </button>

        {gameState === GameState.STOPPED && <h1 className={styles.score}>Word count: {score}</h1>}
      </div>
    </main>
  );
}
