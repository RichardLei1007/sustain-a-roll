import './App.css';
import Footer from './Footer';
import 'react-circular-progressbar/dist/styles.css';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';

function App() {


  const percentage = 50;

  return (
    <div className="App">
      <header className = "header">
        <div className = "title">
          <span className = "titleText">Information</span>
        </div>
      </header>

      <CircularProgressbar className = "progressBar"
        value={percentage}
        text={`${percentage}/100`}
        background={true}
        backgroundPadding={6}
        styles={buildStyles({
          // Rotation of path and trail, in number of turns (0-1)
          rotation: 0,

          // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
          strokeLinecap: 'round',

          // Text size
          textSize: '16px',

          // How long animation takes to go from one percentage to another, in seconds
          pathTransitionDuration: 0.5,

          // Can specify path transition in more detail, or remove it entirely
          // pathTransition: 'none',

          // Colors
          pathColor: `rgba(57, 181, 74, ${percentage / 100})`,
          textColor: 'white',
          trailColor: 'white',
          backgroundColor: '#2B2E33',
          backgroundPadding: 1,
        })}
      />;

      <div className = "selectionMenu">
        <div className = "leftArrow" />
        <span className = "menuText"> Status </span>
        <div className = "rightArrow" />
      </div>

      <Footer></Footer>
    </div>
  );
}

export default App;
