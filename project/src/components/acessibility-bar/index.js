import React from 'react'

import './index.scss'
import { all } from 'q';

export default class AcessbilityBar extends React.Component {

constructor() {
    super();
    this.state = {
      showBar: true,
      tamanhoFont : 'font1',
      theme : 'default'
    }
  }
  
componentDidMount() {
  window.onscroll = () => this.handleScroll()
  document.addEventListener('load', this.AumentaFonte);
}

AumentaFonte = () => {
  document.body.className = ''

  document.body.classList.add(this.state.tamanhoFont)
  this.setState({tamanhoFont: 'font2'})
}
        
DiminuirFonte = () => {
  document.body.className = ''

  if (this.state.tamanhoFont === 'font2'){
    document.body.classList.add(this.state.tamanhoFont)
    this.setState({tamanhoFont: 'font1'})
  }

  if(this.state.tamanhoFont === 'font1') {
    document.body.classList.add(this.state.tamanhoFont)
    this.setState({tamanhoFont: 'font'})
  }    
}

ApplyWhiteContrast = () => {
  document.body.className = ''

  if(this.state.theme === 'white') {
    document.body.classList.add(this.state.theme)
    this.setState({theme: 'white'})
  }  
}
          

handleScroll() {
  const { scroll, showBar } = this.state;
  console.log('Document',document.documentElement.scrollTop , scroll, 'Show', showBar);


  if (document.documentElement.scrollTop > 1000 ) {
    this.setState({showBar: false,})
  }

  if(document.documentElement.scrollTop < scroll) {
      this.setState({showBar: true,})
  }

  this.setState({scroll: document.documentElement.scrollTop })
  }



  render() {
  const { showBar } = this.state

    return (
      <React.Fragment>
        <div id="ta" className={`container-header${showBar ? ' active' : ' deactive'}`} >
          <div className="component-header">
            <div className="fontsize-control">
              <span className="`access-tittle`">Acessibilidade </span>
              <span className="acess-itens -big">A+</span>
              <span className="acess-itens -normal">A</span>
              <span onClick={this.DiminuirFonte}className="acess-itens -small">A-</span>
            </div>
            <div className="contrast" id="ta">
              <span className="contrast-text">Contraste </span>
                <span className="contrast-itens -lightGreen -active" />
                <span className="contrast-itens -white" />
                <span className="contrast-itens -black" />
                <span className="contrast-itens -darkGreen" />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}