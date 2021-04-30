import './App.css';
import Footer from './components/footer.js'
import Game from './components/game.js'
import Header from './components/header.js'
import Summary from './components/summary.js'

function App() {
  return (
    <div className="App">
      <Header className="component" />
      <Summary className="component" />
      <Game  className="component" />
      <Footer className="component" />
    </div>
  );
}

export default App;
