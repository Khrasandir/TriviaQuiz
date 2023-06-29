import { questions } from './Fragen';
// import { Answers } from './Answers';
// import App from "../../App";

const RenderQuestions = () => {
  console.log('Hello');
  return questions.map((question) => {
    console.log(question);

    return (
      <form key={questions.question}>
        <h3>Question: {question.question}</h3>
        {/* <Answers /> */}
      </form>
    );
  });
};

export default RenderQuestions;
