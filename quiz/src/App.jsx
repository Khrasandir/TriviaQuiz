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
      </header>
      <div className="quizzy">
        <RenderQuestions />
      </div>
    </>
  );
}

export default App;
