import styles from './question.module.css';

export interface Answer {
  id: string;
  answer: string;
  isCorrect: boolean;
  isSelected: boolean;
}

export interface QandA {
  id: string;
  question: string;
  answers: Answer[];
}

interface Props {
  question: QandA;
  selectAnswer: (answerId: string) => void;
  isChecked: boolean;
}

export function Question({question, selectAnswer, isChecked}: Props) {

  function getClasses(answer: Answer) {
    const classes = [styles.answer];

    if (isChecked) {
      classes.push(styles['answer--checked']);
      classes.push(answer.isCorrect ? styles['answer--correct'] : styles['answer--incorrect']);
    }

    if (answer.isSelected) {
      classes.push(styles['answer--selected']);
    }

    return classes.join(' ');
  }

  return (
    <div className={styles.questionContainer}>
      <p className={styles.question}>{question.question}</p>
      <div className={styles.answers}>
        {question.answers.map((answer) => {
          return (
            <div
              key={answer.id}
              className={getClasses(answer)}
              onClick={() => selectAnswer(answer.id)}
            >
              {answer.answer}
            </div>
          );
        })}
      </div>
    </div>
  );
}
