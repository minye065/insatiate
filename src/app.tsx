import React from "react";
import "./styles.css";

function App() {
  const handleCreateGame = () => {
    console.log("Create Game Clicked");
  };

  const handleSettings = () => {
    console.log("Settings Clicked");
  };

  return (
    <div className="menuContainer">
      <button className="menuButton createGameButton" onClick={handleCreateGame}>
        Create Game
      </button>
      <button className="menuButton settingsButton" onClick={handleSettings}>
        Settings
      </button>
    </div>
  );
} 

export default App;