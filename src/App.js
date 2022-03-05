import './App.css';
import SimpleBottomNavigation from './BottomNavigation';
import ProgressBar from './ProgressBar';
import BasicButtonGroup from './ButtonGroup';

function App() {

  return (
    <div className="App">
      <header className = "header">
        <div className = "title">
          <span className = "titleText">Information</span>
        </div>
      </header>

      <ProgressBar />

      <BasicButtonGroup />

      <SimpleBottomNavigation />

    </div>
  );
}

export default App;
