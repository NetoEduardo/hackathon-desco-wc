import React from 'react'
import Slider from 'react-slick'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import './index.scss'

import TeacherVestibulares from '../../assets/v2-professora-vestibulares.png'
import TeacherEscolas from '../../assets/v2-professor-escolas.png'
import TeacherUniversitario from '../../assets/v2-professor-universitario.png'
import TeacherConcursos from '../../assets/v2-professor-concursos.png'
import TeacherPos from '../../assets/v2-professor-pos.png'
import TeacherOAB from '../../assets/v2-professora-oab.png'

const settings = {
  dots: true,
  infinite: true,
  speed: 300,
  fade: true,
  cssEase: 'linear',
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false
}
export default class Categories extends React.Component {

  openTab = url => {
    window.open(url, '_blank')
  };

  render() {

  const { 
      id, 
      className
    } = this.props

  return(
    <div id={id} className={className} >
        <Slider className='slider-categorias' {...settings}>
          <div className='item'>
            <h2>Vestibulares</h2>
            <h3>Temos 3 planos perfeitos para você mandar bem em todos os vestibulares do país e Enem.</h3>
            <button onClick={() => this.openTab('https://www.descomplica.com.br/')}>Saiba mais</button>
            <img className='teacher-image' src={TeacherVestibulares} alt='Na imagem, uma foto da professora Lara Rocha sorrindo' />
          </div>
          <div className='item'>
            <h2>Reforço Escolar</h2>
            <h3>Cursos de reforço escolar para Ensino Médio e preparatório para o Encceja.</h3>
            <button onClick={() => this.openTab('https://www.descomplica.com.br/escolas/')}>Saiba mais</button>
            <img className='teacher-image' src={TeacherEscolas} alt='Na imagem, uma foto do professor Allan Rodrigues de braços cruzados' />
          </div>
          <div className='item'>
            <h2>Reforço <br />Universitário</h2>
            <h3>Reforços para os cursos de Medicina, Direito e Engenharia.</h3>
            <button onClick={() => this.openTab('https://www.descomplica.com.br/reforco/')}>Saiba mais</button>
            <img className='teacher-image' src={TeacherUniversitario} alt='Na imagem, uma foto do professor Renato Pellizzari de braços cruzados' />
          </div>
          <div className='item'>
            <h2>Concursos</h2>
            <h3>Estude para carreiras Jurídicas, Policiais, Analistas, Técnicas e Iniciantes</h3>
            <button onClick={() => this.openTab('https://www.descomplica.com.br/concursos/')}>Saiba mais</button>
            <img className='teacher-image' src={TeacherConcursos} alt='Na imagem, uma foto do professor Luiz Jungstedt de braços cruzados' />
          </div>
          <div className='item'>
            <h2>Pós-Graduação</h2>
            <h3>Pós e MBA em Gestão, Educação, Direito e Tecnologia.</h3>
            <button onClick={() => this.openTab('https://www.descomplica.com.br/pos-graduacao/')}>Saiba mais</button>
            <img className='teacher-image' src={TeacherPos} alt='Na imagem, uma foto do professor Samuel Cortez de braços cruzados' />
          </div>
          <div className='item'>
            <h2>OAB</h2>
            <h3>Curso preparatório para o exame da Ordem dos Advogados do Brasil.</h3>
            <button onClick={() => this.openTab('https://masteroab.com.br/')}>Saiba mais</button>
            <img className='teacher-image' src={TeacherOAB} alt='Na imagem, uma foto da professora Yasmin Navega de braços cruzados' />
          </div>
        </Slider>
    </div>
  );
}
}