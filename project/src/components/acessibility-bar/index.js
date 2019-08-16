import React from 'react'

import './index.scss'

export default class AcessbilityBar extends React.Component {

constructor() {
    super();
    this.state = {
      showBar: true,
    }
  }
  
componentDidMount() {
  window.onscroll = () => this.handleScroll()
  document.addEventListener('load', this.AumentaFonte);

  document.addEventListener('load', this.ApplyDefaultContrast);
  document.addEventListener('load', this.ApplyWhiteContrast);
  document.addEventListener('load', this.ApplyBlackContrast);
}

ApplyDefaultContrast = () => {
  document.querySelector('#root').className = ''
  document.querySelector('#root').classList.add('default')
}

ApplyWhiteContrast = () => {
  document.querySelector('#root').className = ''
  document.querySelector('#root').classList.add('whiteTheme')
}

ApplyBlackContrast = () => {
  document.querySelector('#root').className = ''
  document.querySelector('#root').classList.add('blackTheme')
}

AumentaFonte = () => {
  document.body.className = ''
  document.body.classList.add('font2')
}

FonteNormal = () => {
  document.body.className = ''
  document.body.classList.add('font1')
}  
     
  handleScroll() {
      const { scroll } = this.state;


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
                    <span tabIndex="1" onClick={this.AumentaFonte} className="acess-itens -big" alt='Clique para aumentar o tamanho da fonte'>A+</span>
                    <span tabIndex="2" onClick={this.FonteNormal} className="acess-itens -normal" alt='Clique para deixar a fonte no tamanho padrão'>A-</span>
                </div>
                <div className="contrast" id="ta">
                    <span className="contrast-text">Contraste </span>
                      <span tabIndex="3" onClick={this.ApplyDefaultContrast} className="contrast-itens -lightGreen" alt='Sem contraste' />
                      <span tabIndex="4" onClick={this.ApplyWhiteContrast} className="contrast-itens -white" alt='Contraste branco' />
                      <span tabIndex="5" onClick={this.ApplyBlackContrast} className="contrast-itens -black" alt='Contraste preto'/>
                </div>
            </div>
          </div>
       </React.Fragment>
       );
   }

}