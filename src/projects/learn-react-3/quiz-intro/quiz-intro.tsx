import styles from './quiz-intro.module.css';

interface Props {
  startQuiz: () => void;
}

export function QuizIntro({ startQuiz }: Props) {
  return (
    <>
      <h1 className={styles.title}>Quizzical</h1>
      <p className={styles.text}>Trivia in a snack-sized package</p>

      <button
        className={styles.startButton}
        onClick={startQuiz}
      >
        Start quiz
      </button>
    </>
  );
}
