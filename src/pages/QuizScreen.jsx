//NPM Package
import { useState } from "react";

//Project files
import { useGameState } from "../helpers/GameStateProvider";
import questions from "../data/questions.json";
import { useScore } from "../helpers/ScoreProvider";
import { useTimer } from "../helpers/TimerProvider";
import DownTimer from "../components/DownTimer";
import PlusTen from "../components/PlusTen";
import FiftyLifeLine from "../components/FiftyLifeLine";
import { useQuestion } from "../helpers/QuestionProvider";

export default function QuizScreen() {
  //Global State
  const { setGameState } = useGameState();
  const { modifiedQuestion } = useQuestion();
  const { score, setScore, inCorrect, setInCorrect } = useScore();
  const { setRemainingTime } = useTimer();
  const [isUsed, setIsUsed] = useState(false);
  //Local state
  const [currentQuestion, setCurrentQuestion] = useState(0);

  //Methods
  function onAnswer(isCorrect) {
    isCorrect ? setScore(score + 1) : setInCorrect(inCorrect + 1);
    const nextQuestion = currentQuestion + 1;
    nextQuestion < 10
      ? setCurrentQuestion(nextQuestion)
      : setGameState("finished");
    setRemainingTime(15);
    setIsUsed(false)
  }

  //properties
  const answer = questions[currentQuestion].answers.map(
    (answerOption, index) => (
      <button key={index} onClick={() => onAnswer(answerOption.isCorrect)}>
        {answerOption.option}
      </button>
    )
  );

  const answers = modifiedQuestion.map((answerOption, index) => (
    <button key={index} onClick={() => onAnswer(answerOption.isCorrect)}>
      {answerOption.option}
    </button>
  ));

  return (
    <div>
      <h1>Quiz page</h1>
      <PlusTen />
      <FiftyLifeLine
        isUsed={isUsed}
        setIsUsed={setIsUsed}
        currentQuestion={currentQuestion}
      />
      <DownTimer question={[currentQuestion, setCurrentQuestion]} />
      {questions[currentQuestion].text}
      {isUsed === false && <section>{answer}</section>}
      {isUsed === true && <section>{answers}</section>}
    </div>
  );
}
