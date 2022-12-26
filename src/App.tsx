import { useState } from "react";
import {
  Navbar,
  CurrentMood,
  EmojiSelector,
  MoodSelector,
  Button,
} from "./components";
import "./App.css";

function App() {
  const [displayMood, setDisplayMood] = useState<string>("");
  const [emojiBgColor, setEmojiBgColor] = useState<string>("");

  interface feelingListArgs {
    id: number;
    name: string;
  }
  const [feelingsList, setFeelingsList] = useState<feelingListArgs[]>([]);

  return (
    <main className="container">
      <div className="mood-tracker">
        <Navbar />
        <h3 className="welcome-message">How are you feeling today Kush ?</h3>
        <CurrentMood displayText={displayMood} />

        <div
          className="background-color"
          style={{ backgroundColor: emojiBgColor }}
        ></div>

        <EmojiSelector
          setDisplayMood={setDisplayMood}
          setFeelingsList={setFeelingsList}
          setEmojiBgColor={setEmojiBgColor}
        />

        <div className="curved-line"></div>

        <MoodSelector feelingsList={feelingsList} />
        <Button />
      </div>
    </main>
  );
}

export default App;
