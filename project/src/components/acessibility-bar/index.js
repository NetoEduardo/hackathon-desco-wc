import React from 'react'

import './index.scss'

export default class AcessbilityBar extends React.Component {

constructor() {
    super();
    this.state = {
      showBar: true,
      tamanhoFont : 'default',
    }
  }
  
componentDidMount() {
  window.onscroll = () => this.handleScroll()
  document.addEventListener('load', this.AumentaFonte);

  document.addEventListener('load', this.ApplyDefaultContrast);
  document.addEventListener('load', this.ApplyWhiteContrast);
}

AumentaFonte = () => {
  document.body.className = ''

  document.body.classList.add(this.state.tamanhoFont)
  this.setState({tamanhoFont: 'font2'})
}

DefaultSize = () => {
  document.body.className = ''

  document.body.classList.add(this.state.tamanhoFont)
  this.setState({tamanhoFont: 'default'})
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

ApplyDefaultContrast = () => {
  document.querySelector('#root').className = ''
  document.querySelector('#root').classList.add('default')
}

ApplyWhiteContrast = () => {
  document.querySelector('#root').className = ''
  document.querySelector('#root').classList.add('whiteTheme')
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
                <span onClick={this.ApplyDefaultContrast} className="contrast-itens -lightGreen -active" />
                <span onClick={this.ApplyWhiteContrast} className="contrast-itens -white" />
                <span className="contrast-itens -black" />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}