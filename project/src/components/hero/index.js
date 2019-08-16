import React from 'react'
import './index.scss'

import descomplicaLogo from '../../assets/d-descomplica.svg'
import AcessibilityBar from '../acessibility-bar'

export default class Hero extends React.Component {

  render() {

  const { 
    id
  } = this.props

  const isBlack = true;

  return(
    <React.Fragment>
      <AcessibilityBar />
      <div id={id} className={`container-hero`} >
        <div className='header-hero'>
          <img className='desco-logo' alt='Logo com fundo branco do Descomplica' src={descomplicaLogo} />
          <button tabIndex="8" className='login-button'>Já sou aluno</button>
        </div>
        <div className='title-subtitle-container'>
          <h1 className='h1-title-hero'>Bem-vindo ao <span className='descomplica-name'>Descomplica</span> </h1>
          <h2 tabIndex="13" className='h2-subtitle-hero'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sagittis accumsan diam, ut pretium nibh dignissim eu. Vivamus sollicitudin, nisi id iaculis.</h2>
        </div>
        <button tabIndex="14" className='cta-hero' onClick={this.props.onClick}>Compra ai pls</button>
      </div>
    </React.Fragment>
  );
  }
}