import { useState, useEffect } from "react";
import "./Timer.css"

const Timer = ({active,onTimeUp}) => {
  const [timeLeft, setTimeLeft] = useState(15);

  useEffect(() => {
    if (!active) return;

    if (timeLeft === 0) {
      onTimeUp();
      return;
    }

    const id = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
    return () => clearTimeout(id);
  }, [active, timeLeft, onTimeUp]);


  return(
    <div className="timer">
        <span>
            {timeLeft} s
        </span>
    </div>
  )
};
export default Timer;