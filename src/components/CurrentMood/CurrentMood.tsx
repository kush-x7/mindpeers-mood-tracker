import "./currentMood.css";

interface CurrentMoodProps {
  displayText: string;
}

const CurrentMood = ({ displayText }: CurrentMoodProps) => {
  return (
    <div className="mood-display ">
      {displayText && (
        <div className={`current-mood tracking-in-expand-fwd`}>
          <h5 className="mood-text">{displayText}</h5>
        </div>
      )}
    </div>
  );
};

export default CurrentMood;
