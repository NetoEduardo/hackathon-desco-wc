import React from 'react'
import './index.scss'

import AcessibilityBar from '../acessibility-bar'

export default class Hero extends React.Component {

  render() {
  const { 
    id
  } = this.props

  return(
    <React.Fragment>
      <AcessibilityBar />
      <div id={id} className='container-hero' >
        <div className='header-hero'>
          <a href="/" className='desco-logo-container'>
            <div tabIndex="7" className='desco-logo' alt='Logo com fundo branco do Descomplica' />
          </a>
          <button tabIndex="8" className='login-button'>Já sou aluno</button>
        </div>
        <div className='title-subtitle-container'>
          <h1 className='h1-title-hero'>Bem-vindo ao <span className='descomplica-name'>Descomplica</span> </h1>
          <h2 className='h2-subtitle-hero'>Quer se preparar para o Enem, Vestibulares, Concursos Públicos, OAB, Encceja, reforço escolar ou ainda uma Pós-Graduação? A gente te ensina.</h2>
        </div>
        <button tabIndex="9" className='cta-hero' onClick={this.props.onClick}>Construa seu futuro</button>
      </div>
    </React.Fragment>
  );
  }
}