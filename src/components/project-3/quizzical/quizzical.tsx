import styles from './quizzical.module.css';
import { QuizIntro } from '../quiz-intro';
import { QuizQuestions } from '../quiz-questions';
import { useState } from 'react';

export function Quizzical() {
  const [showQuiz, setShowQuiz] = useState(false);

  return (
    <main className={styles.main}>
      <div className={styles['blob--yellow']}></div>
      <div className={styles['blob--blue']}></div>

      <div className={styles.quiz}>
        {!showQuiz && <QuizIntro startQuiz={() => setShowQuiz(true)} />}

        {showQuiz && <QuizQuestions />}
      </div>
    </main>
  );
}
