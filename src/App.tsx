// import reactLogo from "./assets/Artboard 1.svg";
import { useState } from "react";
import "./App.css";
import CurrentMood from "./components/CurrentMood/CurrentMood";
import EmojiSelector from "./components/EmojiSelector/Emoji-selector";
import MoodSelector from "./components/MoodSelector/MoodSelector";
import Navbar from "./components/Navbar/Navbar";

function App() {
  const [displayMood, setDisplayMood] = useState<string>("");
  return (
    <>
      <main className="container">
        <div className="mood-tracker">
          <Navbar />

          <h3 className="welcome-message">How are you feeling today Kush ?</h3>

          <CurrentMood displayText={displayMood} />

          <EmojiSelector setDisplayMood={setDisplayMood} />

          <hr />

          <MoodSelector />

          <button>Proceed</button>
        </div>
      </main>
    </>
  );
}

export default App;
