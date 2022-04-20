
import { Routes, Route } from 'react-router-dom';
import './App.css';
import { BlackJack } from './blackJack';
import { PuzzleGame } from './blackJack/puzzle';
export function Home() {
  return (
    <div>
        <h1>Programing games</h1>
    <div><a href = "blackjack">blackjack</a></div> 
    <div><a href= "Puzzlegame">puzzle game</a></div>
     
     
    </div>
  );
}
 

