import questions from "../data/questions.json";

export default function QuizScreen() {
  const answer = questions[0].answers.map((answerOption, index) => (
    <button key={index}>{answerOption.option}</button>
  ));
  
  return (
    <div>
      <h1>Quiz page</h1>
      {questions[0].text}
      <section>{answer}</section>
    </div>
  );
}
