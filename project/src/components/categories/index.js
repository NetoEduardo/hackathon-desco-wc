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
  autoplay: true,
  autoplaySpeed: 21500
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
            <h3>1</h3>
          </div>
          <div className='item-2'>
            <h3>2</h3>
          </div>
          <div className='item-3'>
            <h3>3</h3>
          </div>
        </Slider>
    </div>
  );
}
}