import React from 'react'
import './index.scss'

import descomplicaLogo from '../../assets/d-descomplica.svg'

export default class Hero extends React.Component {

  render() {

  const { 
    id, 
    className
  } = this.props

  return(
    <React.Fragment>
      <div id={id} className={className} >
        <div className='header-hero'>
          <img className='desco-logo' alt='logo-descomplica' src={descomplicaLogo} />
          <button className='login-button'>Já sou aluno</button>
        </div>
        <h1 className='h1-title-hero'>HERO TITLE</h1>
        <h2 className='h2-subtitle-hero'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h2>
        <button className='cta-hero' onClick={this.props.onClick}>Click Here</button>
      </div>
    </React.Fragment>
  );
  }
}