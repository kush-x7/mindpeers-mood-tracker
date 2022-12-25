import "./moodSelector.css";
interface MoodSelectorProps {
  feelingsList: Array<{ id: number; name: string }>;
}

const MoodSelector = ({ feelingsList }: any) => {
  const handleClick = () => {
    // const grid = document.querySelector(".mood-list");
    // const allCards = grid?.children;
    // for (let i = 0; i < allCards?.length - 1; )
    //   console.log("clicked the button", grid.children);
  };
  return (
    <>
      <section className="mood-section">
        <h3 className="mood-section--title">Are you also feeling?</h3>
        {/* <button onClick={handleClick}>click me</button> */}
        <div className="mood-list ">
          {feelingsList.map((feeling: any) => {
            // console.log(feeling);
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
