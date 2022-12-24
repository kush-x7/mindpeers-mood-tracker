// import reactLogo from "./assets/Artboard 1.svg";
import "./App.css";

function App() {
  return (
    <>
      <main className="container">
        <div className="mood-tracker">
          <nav className="navbar">
            <div className="navbar-logo"></div>
            <div className="navbar-title"></div>
          </nav>

          <h2 className="welcome-message"></h2>
          <div className="current-mood-display"></div>

          <div className="emoji-selector"></div>
          <hr />

          <div className="mood-selector">
            <div className="mood-option">Pensive</div>
            <div className="mood-option">Pensive</div>
            <div className="mood-option">Pensive</div>
            <div className="mood-option">Pensive</div>
            <div className="mood-option">Pensive</div>
          </div>

          <button>Proceed</button>
        </div>
      </main>
    </>
  );
}

export default App;
