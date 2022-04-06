
import './App.css';
import { BlackJack } from './blackJack';

function App() {
  return (
    <div>
    <div className="App">
      <div className="playingCards">
    <div className="card back"></div>
    <div className="card rank-7 spades">
    <span className="rank">7</span>
    <span className="suit">&spades;</span>
</div>
    
<div>
<strong>
    <span className="card rank-a clubs">
        <span className="rank">A</span>
        <span className="suit">&clubs;</span>
    </span>
</strong>
</div>
    </div>
    </div>
      <BlackJack></BlackJack>
    </div>
  );
}

export default App;
