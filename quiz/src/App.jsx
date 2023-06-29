// import { useState } from "react";
import './App.css';
// import { questions } from './components/Fragen';
import RenderQuestions from './components/Questions';

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <header>
        <h1>Max super interesting Quiz!</h1>
        <p>He totally did it all by himself!</p>
      </header>
      <div className="quizzy">
        <form action="#">
          <RenderQuestions />
          Hello Quiz
        </form>
      </div>
    </>
  );
}

export default App;
