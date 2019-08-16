import React from 'react'
import './index.scss'
import computador from './computador.png'
import video from './try-me.gif'

export default class TryMe extends React.Component {

  render() {
    return (
      <div id='try-me' className='container-try-me' >
        <div className='title-container'>
          <span className='title-text'>Experimente nossa plataforma</span>
        </div>
        <div className='image-container'>
          <img className='image' src={computador} alt="Na imagem, um computador com a tela de exercícios aberta." />
          <img className='video-tutorial' src={video} alt="Um gif com o funcionamento da plataforma" />
        </div>
      </div>
    );
  }
}