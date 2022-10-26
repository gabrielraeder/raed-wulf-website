import React from 'react';
import GameCard from './GameCard';
import '../CSS/GameList.css';

const games = Array.from(Array(10).keys())

export default function GamesList() {
  return (
    <div className="gamesList">
      <h1>JOGOS</h1>
      <div className="gamesContainer">
        {
          games.map(() => <GameCard/>)
        }
      </div>
    </div>
  );
}
