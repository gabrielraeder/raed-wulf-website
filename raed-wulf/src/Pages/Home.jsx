import React from 'react';
import Header from '../Components/Header';
import MainBody from '../Components/MainBody';
import GamesList from '../Components/GamesList';
import News from '../Components/News';
import Footer from '../Components/Footer';

export default function Home() {
  return (
    <div>
      <Header />
      <MainBody />
      <GamesList />
      <News />
      <Footer />
    </div>
  );
}
