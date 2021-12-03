//Project files
import { useGameState } from "../helpers/GameStateProvider";
import { useRandonArray } from "../helpers/QuestionsProvider";

export default function WelcomeScreen() {
  //Global State
  const { setGameState } = useGameState();
  const { dispatchRandomArray } = useRandonArray();
  function shuffle(array) {
    var tmp,
      current,
      top = array.length;
    if (top)
      while (--top) {
        current = Math.floor(Math.random() * (top + 1));
        tmp = array[current];
        array[current] = array[top];
        array[top] = tmp;
      }
    return array;
  }

  function onStart() {
    const randomArr = shuffle([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);
    dispatchRandomArray({ type: "SET_QUESTION", payload: randomArr });
    setGameState("playing");
  }

  return (
    <div className="welcome_wrapper">
      <h1>Are you ready to test your JavaScript skills?</h1>
      <ul>
        <li>You will have only 15 seconds per each question</li>
        <li>
          You can use once those two options 'delete two wrong answers' & 'add
          more 10 seconds'
        </li>
      </ul>
      <button data-testid="startGame" onClick={onStart}>
        Start Game
      </button>
    </div>
  );
}
