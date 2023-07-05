import { useState } from 'react';
import './questions.css';

const RenderQuestions = ({ trivia }) => {
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [selectedAnswersArr, setSelectedAnswersArr] = useState([]);
  const [score, setScore] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [showResults, setShowResults] = useState(false);

  function selectHandler(questionIndex, answerIndex) {
    setSelectedAnswers((prevSelectedAnswers) => {
      const updatedAnswers = [...prevSelectedAnswers];
      updatedAnswers[questionIndex] = answerIndex;
      return updatedAnswers;
    });
  }

  const answerArr = () => {
    const selectedAnswerText =
      trivia[currentQuestionIndex].answers[
        selectedAnswers[currentQuestionIndex]
      ];
    setSelectedAnswersArr((prevSelectedAnswersArr) => [
      ...prevSelectedAnswersArr,
      selectedAnswerText,
    ]);
    compareAnswers(selectedAnswerText);
    setCurrentQuestionIndex((prevQuestionIndex) => prevQuestionIndex + 1);
    if (currentQuestionIndex === trivia.length - 1) {
      setShowResults(true);
    }
  };

  const compareAnswers = (selectedAnswer) => {
    const correctAnswer = trivia[currentQuestionIndex].correctAnswer;

    if (selectedAnswer === correctAnswer) {
      setScore((prevScore) => prevScore + 1);
    }
  };

  return (
    <>
      {showResults ? (
        <div className="resultCont">
          <h2>
            Results: {score < 4 ? 'Wow.. maybe try reading a book' : 'Not bad'}
          </h2>
          <h2>Score: {score}/6</h2>
          <div>
            {trivia.map((question, questionIndex) => (
              <div key={questionIndex}>
                <h3>{question.question}</h3>
                <p className="singResult">
                  Your Answer: {selectedAnswersArr[questionIndex]}
                  {selectedAnswersArr[questionIndex] ===
                  question.correctAnswer ? (
                    <div className="correct"> Correct</div>
                  ) : (
                    <div className="wrong">
                      {' '}
                      Wrong you noob, Correct Answer: {question.correctAnswer}
                    </div>
                  )}
                </p>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="answers">
          {trivia.length && (
            <div key={trivia[currentQuestionIndex].id}>
              <h2>{trivia[currentQuestionIndex].question}</h2>
              <div className="something">
                {trivia[currentQuestionIndex].answers.map(
                  (answer, answerIndex) => (
                    <div
                      className={`answerContainer 
                        ${
                          selectedAnswers[currentQuestionIndex] === answerIndex
                            ? 'selected'
                            : ''
                        }`}
                      onClick={() =>
                        selectHandler(currentQuestionIndex, answerIndex)
                      }
                      key={answerIndex}
                    >
                      {answer}
                    </div>
                  )
                )}
              </div>
              <div className="buttDiv">
                <button onClick={answerArr}>Submit Answer</button>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default RenderQuestions;
