import { useState, useEffect } from 'react';

const RenderQuestions = () => {
  const [trivia, setTrivia] = useState([]);
  const url = 'https://wd40-trivia.onrender.com/api/questions';
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [selectedAnswersArr, setSelectedAnswersArr] = useState([]);
  const [score, setScore] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [showResults, setShowResults] = useState(false);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setTrivia(data))
      .catch((error) => console.error(error));
  }, []);

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
        <div>
          <h2>Results:</h2>
          <h2>Score: {score}</h2>
          <div>
            {trivia.map((question, questionIndex) => (
              <div key={questionIndex}>
                <h3>{question.question}</h3>
                <p>
                  Your Answer: {selectedAnswersArr[questionIndex]}
                  {selectedAnswersArr[questionIndex] ===
                  question.correctAnswer ? (
                    <span className="correct"> (Correct)</span>
                  ) : (
                    <span className="wrong">
                      {' '}
                      (Wrong, Correct Answer: {question.correctAnswer})
                    </span>
                  )}
                </p>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div>
          <h2>{trivia[currentQuestionIndex].question}</h2>
          <div className="answers">
            {trivia[currentQuestionIndex].answers.map((answer, answerIndex) => (
              <span
                className={
                  selectedAnswers[currentQuestionIndex] === answerIndex
                    ? 'selected'
                    : ''
                }
                onClick={() => selectHandler(currentQuestionIndex, answerIndex)}
                key={answerIndex}
              >
                {answer}
              </span>
            ))}
          </div>
          <button onClick={answerArr}>Submit Answer</button>
        </div>
      )}
    </>
  );
};

export default RenderQuestions;
