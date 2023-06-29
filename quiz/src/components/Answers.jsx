import { questions } from './Fragen';

export default function Answers() {
  return questions.map((answers) => {
    return (
      <div key={questions.answers}>
        <span className="answers">{answers}</span>
      </div>
    );
  });
}
