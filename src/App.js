import './App.css';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <header className = "header">
        <div className = "title">
          <span className = "titleText">Information</span>
        </div>
      </header>

      <div className =  "centerSection">
        <div className = "progressBar" />
      </div>

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
