import { useEffect, useState } from "react";
import "./moodSelector.css";
interface MoodSelectorProps {
  feelingsList: Array<{ id: number; name: string }>;
}

const MoodSelector = ({ feelingsList }: MoodSelectorProps) => {
  const [myAnimation, setMyAnimation] = useState<string>("");

  useEffect(() => {
    setMyAnimation("scale-up-center");
    setTimeout(() => {
      setMyAnimation("");
    }, 410);
  }, [feelingsList]);

  return (
    <section className="mood-section">
      <h3 className="mood-section--title">Are you also feeling?</h3>
      <div className="mood-list ">
        {feelingsList.map((feeling: any) => {
          return (
            <div key={feeling.id} className={`mood-item ${myAnimation}`}>
              <div className="mood-option">{feeling.name}</div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default MoodSelector;
