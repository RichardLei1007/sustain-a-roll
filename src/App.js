import './App.css';
import SimpleBottomNavigation from './BottomNavigation';
import BasicButtonGroup from './ButtonGroup';
import ProgressBar from './ProgressBar';
import { useState } from "react";

function App() {

  const [percentage, savePercentage] = useState(0);
  const [botNav, saveBotNav] = useState(1);

  if (botNav === 1) {
    return (
      <div className="App">
      <header className = "header">
        <div className = "title">
          <span className = "titleText">Information</span>
        </div>
      </header>

      <ProgressBar title = {percentage}/>

      <BasicButtonGroup savePercentage = {savePercentage} />

      <SimpleBottomNavigation saveBotNav = {saveBotNav} />

      </div>
    );
  }

  if (botNav === 2) {
    return (
      <div className="App">
      <header className = "header">
        <div className = "title">
          <span className = "titleText">Weekly Report</span>
        </div>
      </header>

      {/* <SimpleBottomNavigation saveBotNav = {saveBotNav} /> */}

      </div>
    );
  }

  if (botNav === 3) {
    return (
      <div className="App">
      <header className = "header">
        <div className = "title">
          <span className = "titleText">Settings</span>
        </div>
      </header>

      {/* <SimpleBottomNavigation saveBotNav = {saveBotNav} /> */}

      </div>
    );
  }
}

export default App;
