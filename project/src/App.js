import React from 'react'

import Hero from './components/hero/index'
import Categories from './components/categories';
import SocialProof from './components/social-proof';
import TryMe from './components/try-me';
import Faq from './components/faq';
import Footer from './components/footer';

import './App.scss'

function App() {
  return (
    <div className="app">
      <Hero />
      <Categories />
      <Faq />
      <SocialProof />
      <TryMe />
      <Footer />
    </div>
  );
}

export default App;
