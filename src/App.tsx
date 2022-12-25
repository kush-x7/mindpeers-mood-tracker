// import reactLogo from "./assets/Artboard 1.svg";
import { useState } from "react";
import "./App.css";
import CurrentMood from "./components/CurrentMood/CurrentMood";
import EmojiSelector from "./components/EmojiSelector/Emoji-selector";
import MoodSelector from "./components/MoodSelector/MoodSelector";
import Navbar from "./components/Navbar/Navbar";
import emojisListOfObjects from "./assets";
import Button from "./components/Button/Button";
import Relaxed from "./components/EmojiPedia/Relaxed";
import logo from "./assets/Artboard 2.svg";

function App() {
  const [displayMood, setDisplayMood] = useState<string>("");

  interface feelingListArgs {
    id: number;
    name: string;
  }
  const [feelingsList, setFeelingsList] = useState<feelingListArgs[]>([]);

  return (
    <>
      <main className="container">
        <div className="mood-tracker">
          <Navbar />

          <Relaxed />
          <img src={logo} alt="" />
          <h3 className="welcome-message">How are you feeling today Kush ?</h3>

          <CurrentMood displayText={displayMood} />

          <EmojiSelector
            emojisListOfObjects={emojisListOfObjects}
            setDisplayMood={setDisplayMood}
            setFeelingsList={setFeelingsList}
          />

          <div className="curved-line"></div>

          <MoodSelector feelingsList={feelingsList} />

          <Button />
        </div>
      </main>
    </>
  );
}

export default App;
