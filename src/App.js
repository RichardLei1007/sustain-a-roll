import './App.css';
import SimpleBottomNavigation from './BottomNavigation';
import BasicButtonGroup from './ButtonGroup';
import ProgressBar from './ProgressBar';
import BotNavWeekly from './BotNavWeekly';
import BotNavSetting from './BotNavSetting';
import WeeklyReport from './WeeklyReport';
import WeeklyInfo from './WeeklyInfo';
import ThresholdSlider from './ThresholdSlider';
import UsageSlider from './UsageSlider';
import { useState } from "react";

function App() {

  const [percentage, savePercentage] = useState(0);
  const [botNav, saveBotNav] = useState(1);
  const [threshold, saveThreshold] = useState(100);
  const [usage, saveUsage] = useState(3);
  const [status, saveStatus] = useState(1);

  if (botNav === 1) {
    return (
      <div className="App">
      <header className = "header">
        <div className = "title">
          <span className = "titleText">Information</span>
        </div>
      </header>

      <ProgressBar percent = {percentage} threshold = {threshold} status = {status} usage = {usage} />

      <BasicButtonGroup savePercentage = {savePercentage} saveStatus = {saveStatus} />

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

      <WeeklyReport />

      <WeeklyInfo className = "weeklyInfo" />

      <BotNavWeekly saveBotNav = {saveBotNav} />

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

      <ThresholdSlider saveThreshold = {saveThreshold} />

      <UsageSlider saveUsage = {saveUsage} />

      <BotNavSetting saveBotNav = {saveBotNav} />

      </div>
    );
  }
}

export default App;
