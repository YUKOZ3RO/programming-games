
import { Routes, Route } from 'react-router-dom';
import './App.css';
import { BlackJack } from './blackJack';
import { PuzzleGame } from './blackJack/puzzle';
import{Home} from'./home'
function App() {
  return (
    <div>
   
     <Routes>
        <Route path="blackJack" element={<BlackJack/>} />
        <Route path="puzzle-game" element={<PuzzleGame />} /> 
        <Route path="/" element={<Home/>} />

      </Routes>
    </div>
  );
}

export default App;
