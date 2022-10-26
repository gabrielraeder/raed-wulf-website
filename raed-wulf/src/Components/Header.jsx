import React from 'react';
import '../CSS/Header.css';

export default function Header() {
  return (
    <div className="header">
      <h1>RAED WULF</h1>
      <nav className="navContainer">
        <button type="button" className="navButton">opção 1</button>
        <button type="button" className="navButton">opção 2</button>
        <button type="button" className="navButton">opção 3</button>
      </nav>
    </div>
  );
}
