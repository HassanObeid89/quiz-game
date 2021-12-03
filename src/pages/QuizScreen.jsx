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
import { useRandonArray } from "../helpers/QuestionsProvider";
import { useFifty } from "../helpers/FifityAnswersProvider";

export default function QuizScreen() {
  //Global State
  const { setGameState } = useGameState();
  const { modifiedQuestion } = useFifty();
  const { score, setScore, inCorrect, setInCorrect } = useScore();
  const { setRemainingTime } = useTimer();
  const [isUsed, setIsUsed] = useState(false);
  const { randomArray } = useRandonArray();
  //Local state
  let random = Math.floor(Math.random() * 12);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  //Methods
  function onAnswer(isCorrect) {
    isCorrect ? setScore(score + 1) : setInCorrect(inCorrect + 1);
    const nextQuestion = currentQuestion + 1;
    nextQuestion < 10
      ? setCurrentQuestion(nextQuestion)
      : setGameState("finished");
    setRemainingTime(15);
    setIsUsed(false);
  }

  //properties
  const question = questions.map((ques) => <h2>{ques.text}</h2>);

  const answer = questions[randomArray[currentQuestion]].answers.map(
    (answerOption, index) => (
      <button key={index} onClick={() => onAnswer(answerOption.isCorrect)}>
        {answerOption.option}
      </button>
    )
  );

  const fiftyAnswers = modifiedQuestion.map((answerOption, index) => (
    <button key={index} onClick={() => onAnswer(answerOption.isCorrect)}>
      {answerOption.option}
    </button>
  ));

  return (
    <div className="quiz_wrapper">
      <h1>Question {currentQuestion + 1}/10</h1>
      <section className="options">
        <PlusTen />
        <FiftyLifeLine
          isUsed={isUsed}
          setIsUsed={setIsUsed}
          currentQuestion={currentQuestion}
        />
        <DownTimer question={[currentQuestion, setCurrentQuestion]} />
      </section>
      {question[randomArray[currentQuestion]]}
      <section className="answers">
        {isUsed === false && <section>{answer}</section>}
        {isUsed === true && <section>{fiftyAnswers}</section>}
      </section>
    </div>
  );
}
