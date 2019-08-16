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
                    <span className="access-tittle">Acessibilidade: </span>
                    <span tabIndex="1" className="acess-itens -big">A+</span>
                    <span tabIndex="2" className="acess-itens -normal">A</span>
                    <span tabIndex="3" className="acess-itens -small">A-</span>
                </div>
                <div className="contrast" id="ta">
                    <span className="contrast-text">Contraste: </span>
                        <span tabIndex="4" className="contrast-itens -lightGreen -active" />
                        <span tabIndex="5" className="contrast-itens -white" />
                        <span tabIndex="6" className="contrast-itens -black" />
                        <span tabIndex="7" className="contrast-itens -darkGreen" />
                </div>
            </div>
          </div>
       </React.Fragment>
       );
   }
}