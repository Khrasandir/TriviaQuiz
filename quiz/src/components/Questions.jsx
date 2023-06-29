import { questions } from './Fragen';
// import App from "../../App";

const RenderQuestions = () => {
  // const question = questions.question;
  // console.log({ question });

  console.log(questions);
  return questions.map((question) => {
    console.log(question);

    return (
      <form key={questions.question}>
        <p>Question: {question.question}</p>
        <answer />
      </form>
    );
  });
};

export default RenderQuestions;
