import "./moodSelector.css";
interface MoodSelectorProps {
  feelingsList: Array<{ id: number; name: string }>;
}

const MoodSelector = ({ feelingsList }: any) => {
  return (
    <>
      <section className="mood-section">
        <h3 className="mood-section--title">Are you also feeling?</h3>
        <div className="mood-list ">
          {feelingsList.map((feeling: any) => {
            console.log(feeling);
            return (
              <div key={feeling.id} className="mood-item">
                <div className="mood-option">{feeling.name}</div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default MoodSelector;
