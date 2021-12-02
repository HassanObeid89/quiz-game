import { useState } from "react";
import { useTimer } from "../helpers/TimerProvider";
export default function PlusTen() {
  const [isUsed, setIsUsed] = useState(false);
  const { remainingTime, setRemainingTime } = useTimer();
  function addTenSec() {
    setRemainingTime(remainingTime + 10);
    setIsUsed(true);
  }
  return (
    <div>
      <button disabled={isUsed} onClick={addTenSec}>
        +10 sec
      </button>
    </div>
  );
}
