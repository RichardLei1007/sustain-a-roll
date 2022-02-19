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
      <Footer></Footer>
    </div>
  );
}

export default App;
