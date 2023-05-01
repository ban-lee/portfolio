import styles from './quiz-questions.module.css';
import { Answer, QandA, Question } from '../question';
import { nanoid } from 'nanoid';
import { useEffect, useState } from 'react';

function fixQuotes(str: string) {
  return str.replaceAll('&#039;', '\'').replaceAll('&quot;', '"');
}

function toQAndA(json: {[key: string]: string}) {
  const answers: Answer[] = [json['correct_answer'], ...json['incorrect_answers']].map((answer) => toAnswer(answer));
  answers[0].isCorrect = true;
  shuffleArray(answers);

  return {
    id: nanoid(),
    question: fixQuotes(json['question']),
    answers: answers,
  };
}

function toAnswer(answer: string) {
  return {
    id: nanoid(),
    answer: fixQuotes(answer),
    isCorrect: false,
    isSelected: false,
  };
}

// From https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
function shuffleArray(array: unknown[]) {
  for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
  }
}

export function QuizQuestions() {
  const [questions, setQuestions] = useState<QandA[]>([]);
  const [isChecked, setIsChecked] = useState(false);

  function getFromTriviaDb() {
    fetch('https://opentdb.com/api.php?amount=5')
      .then((res) => res.json())
      .then((json) => setQuestions(json.results.map((json: {[key: string]: string}) => toQAndA(json))));
  }

  useEffect(() => {
    getFromTriviaDb();
  }, []);

  function selectAnswer(questionId: string, answerId: string) {
    if (isChecked) return;

    setQuestions((oldQuestions) => {
      return oldQuestions.map((question) => {
          return question.id === questionId ?
              {
                ...question,
                answers: question.answers.map((answer) =>
                  ({ ...answer, isSelected: answer.id === answerId ? true : false }))
              } :
              question;
        });
    });
  }

  function countAnswers() {
    return questions.filter((qAndA) => {
      return qAndA.answers.some((a) => a.isSelected && a.isCorrect);
    }).length;
  }

  function resetQuiz() {
    getFromTriviaDb();
    setIsChecked(false);
  }

  return (
    <>
      {questions.length > 0 &&
        <>
          <div className={styles.questions}>
            {questions.map((question) =>
                <Question
                  key={question.id}
                  question={question}
                  selectAnswer={(answer) => selectAnswer(question.id, answer)}
                  isChecked={isChecked}
                />
            )}
          </div>
          <div className={styles.quizFooter}>
            {!isChecked && <button onClick={() => setIsChecked(true)}>Check answers</button>}
            {isChecked && (
              <>
                <p>You scored {countAnswers()}/{questions.length} correct answers</p>
                <button onClick={resetQuiz}>Play again</button>
              </>
            )}
          </div>
        </>
      }
    </>
  );
}
