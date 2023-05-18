import styles from './typing-game.module.css';
import { ChangeEvent, useRef, useState } from 'react';
import { GameState, useGameState } from '../useGameState';
import { useEffect } from 'react';

function countWords(text: string) {
  const words = text.split(' ').filter((word) => word !== '');
  return words.length;
}

export function TypingGame() {
  const [typedText, setTypedText] = useState('');
  const textareaRef = useRef<HTMLTextAreaElement|null>(null);
  const [score, setScore] = useState(0);

  const {gameState, timeRemaining, startGame} = useGameState();

  function handleChange(e: ChangeEvent<HTMLTextAreaElement>) {
    const { value } = e.target;
    setTypedText(value);
  }

  function handleStartGame() {
    startGame();
    setScore(0);
    setTypedText('');
  }

  useEffect(() => {
    if (gameState === GameState.RUNNING) {
      textareaRef.current?.focus();
    }

    if (gameState === GameState.STOPPED) {
      setScore(countWords(typedText));
    }
  }, [gameState]);

  return (
    <main className={styles.container}>
      <h1 className={styles.title}>How fast do you type?</h1>

      <div className={styles.gameArea}>
        <textarea
          className={styles.textarea}
          ref={textareaRef}
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
