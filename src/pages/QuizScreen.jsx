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
    setIsUsed(false);
  }

  //properties
  const answer = questions[currentQuestion].answers.map(
    (answerOption, index) => (
      <button  key={index} onClick={() => onAnswer(answerOption.isCorrect)}>
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
    <div className='quiz_wrapper'>
      <h1>Question {currentQuestion}/10</h1>
      <section className='options'>
      <PlusTen />
      <FiftyLifeLine
        isUsed={isUsed}
        setIsUsed={setIsUsed}
        currentQuestion={currentQuestion}
      />
      <DownTimer question={[currentQuestion, setCurrentQuestion]} />
      </section>
      <h2>{questions[currentQuestion].text}</h2>
      <section className='answers'>
      {isUsed === false && <section>{answer}</section>}
      {isUsed === true && <section>{fiftyAnswers}</section>}
      </section>
    </div>
  );
}
