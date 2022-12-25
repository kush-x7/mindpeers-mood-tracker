import "./moodSelector.css";
interface MoodSelectorProps {
  feelingsList: Array<{ id: number; name: string }>;
}

const MoodSelector = ({ feelingsList }: any) => {
  return (
    <div className="mood-selector parent">
      {feelingsList.map((feeling: any) => {
        console.log(feeling);
        return (
          <div key={feeling.id} className="mood-option">
            {feeling.name}
          </div>
        );
      })}
    </div>
  );
};

export default MoodSelector;
