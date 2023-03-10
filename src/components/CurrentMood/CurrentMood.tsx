import { useEffect, useState } from "react";
import "./currentMood.css";

interface CurrentMoodProps {
  displayText: string;
}

const CurrentMood = ({ displayText }: CurrentMoodProps) => {
  // To Animate mood-text
  const [myAnimation, setMyAnimation] = useState<string>("");

  useEffect(() => {
    setMyAnimation("animate-text");
    setTimeout(() => {
      setMyAnimation("");
    }, 550);
  }, [displayText]);

  return (
    <div className="mood-display ">
      {displayText && (
        <div className={`current-mood  color-change-2x ${myAnimation}`}>
          <h5 className="mood-text">{displayText}</h5>
        </div>
      )}
    </div>
  );
};

export default CurrentMood;
