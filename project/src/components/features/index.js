import React from 'react'
import Slider from 'react-slick'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import './index.scss'

import ImageFeatures from '../../assets/image-features.png'

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false
}
export default class Categories extends React.Component {

  render() {

  const { 
      id, 
      className
    } = this.props


  return(
    <div id={id} className={className} >
        <h2>Metodologia</h2>
        <Slider className='slider-features' {...settings}>
          <div className='item-features'>
            <h3>Aulas ao vivo e gravadas</h3>
            <p>Aulas em qualquer dispositivo e sem ter que gastar o plano de dados do seu celular.</p>
          </div>
          <div className='item-features'>
            <h3>Exercícios</h3>
            <p>Listas de exercícios de vestibulares com questões inéditas e número de acertos e erros por disciplina.</p>
          </div>
          <div className='item-features'>
            <h3>Monitorias, redação, plano de estudos</h3>
            <p>Listas de exercícios de vestibulares com questões inéditas e número de acertos e erros por disciplina.</p>
          </div>
        </Slider>
        <img className='image-features' src={ImageFeatures} alt='' />
    </div>
  );
}
}