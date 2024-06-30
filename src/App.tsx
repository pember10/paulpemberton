import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import CareerSection from './components/CareerSection';
import AboutMeSection from './components/AboutMeSection';
import HighlightedReposSection from './components/HighlightedReposSection';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <CareerSection />
        <AboutMeSection />
        <HighlightedReposSection />
      </main>
    </div>
  );
}

export default App;
