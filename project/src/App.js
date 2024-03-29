import React from 'react'

import Hero from './components/hero/index'
import Categories from './components/categories';
import Features from './components/features';
import SocialProof from './components/social-proof';
import TryMe from './components/try-me';
import Faq from './components/faq';
import Footer from './components/footer';

import { animateScroll } from 'react-scroll'

import './App.scss'

export default class App extends React.Component {

  scrollTo () {
    const element = document.querySelector("#categories")

    if (element) {
      animateScroll.scrollTo(element.offsetTop)
    }
  }

 render() {
  return (
    <div className="app">
      <Hero id={'hero'} className={'container-hero'} onClick={this.scrollTo} />
      <Categories id={'categories'} className={'container-categories'} />
      <Features id={'features'} className={'container-features'}/>
      <TryMe id={'try-me'} className={'container-try-me'} />
      <SocialProof id={'social-proof'} className={'container-social-proof'} onClick={this.scrollTo}/>
      <Faq id={'try-me'} className={'container-faq'} />
      <Footer id={'try-me'} className={'container-footer'} />
    </div>
  );
  }
}