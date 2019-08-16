import React from 'react'
import Slider from 'react-slick'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import './index.scss'

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  autoplay: false
}
export default class Categories extends React.Component {

  render() {

  const { 
      id, 
      className
    } = this.props


  return(
    <div id={id} className={className} >
        <Slider className='slider-categorias' {...settings}>
          <div className='item-1'>
            <h2>Vestibulares</h2>
            <h3>Lorem Ipsum Dolor<br />Lorem Ipsum Dolor<br /> Lorem Ipsum Dolor</h3>
            <button>Saiba Mais</button>
          </div>
          <div className='item-2'>
            <h2>Concursos</h2>
            <h3>Lorem Ipsum Dolor<br />Lorem Ipsum Dolor<br /> Lorem Ipsum Dolor</h3>
            <button>Saiba Mais</button>
          </div>
          <div className='item-3'>
            <h2>Pós-Graduação</h2>
            <h3>Lorem Ipsum Dolor<br />Lorem Ipsum Dolor<br /> Lorem Ipsum Dolor</h3>
            <button>Saiba Mais</button>
          </div>
        </Slider>
    </div>
  );
}
}