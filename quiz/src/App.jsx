import { useState, useEffect } from 'react';
import './App.css';
// import { questions } from './components/Fragen';
import RenderQuestions from './components/Questions';

function App() {
  const url = 'https://wd40-trivia.onrender.com/api/questions';
  const [trivia, setTrivia] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setTrivia(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      <header>
        <h1>This is a Quiz!</h1>
      </header>
      <div className="quizzy">
        <RenderQuestions trivia={trivia} />
      </div>
    </>
  );
}

export default App;
