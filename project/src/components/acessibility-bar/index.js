import React from 'react'

import './index.scss'
import { all } from 'q';

export default class AcessbilityBar extends React.Component {

   constructor() {
       super();
       this.state = {
          showBar: true
       }
     }
  
   componentDidMount() {
     window.onscroll = () => this.handleScroll()
     document.addEventListener('load', this.AumentaFonte);
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
           <div className={`container-header${showBar ? ' active' : ' deactive'}`} >
               <div className="component-header">
                   <div className="fontsize-control">
                       <span className="access-title">Acessibilidade: </span>
                       <span onClick={this.AumentaFonte} className="acess-itens -big">A+</span>
                       <span onClick={this.FonteNormal} className="acess-itens -normal">A</span>
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