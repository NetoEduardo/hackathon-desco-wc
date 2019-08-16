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
export default class SocialProof extends React.Component {

    render() {
        return(
          <div className='container-social-proof' >
              <Slider className='slider-social' {...settings}>
                <div className='item-1-social'>
                  <img src='https://d3uyk7qgi7fgpo.cloudfront.net/landings/images/355376b8-95ba-4572-8258-f3760149595a-aluno-3.png' />
                  <p>Mussum Ipsum, cacilds vidis litro abertis. Leite de capivaris, leite de mula manquis sem cabeça. A ordem dos tratores não altera o pão duris. Suco de cevadiss deixa as pessoas mais interessantis.  Tá deprimidis, eu conheço uma cachacis que pode alegrar sua vidis. Quem manda na minha terra sou euzis! Admodum accumsan disputationi eu sit. Vide electram sadipscing et per.</p>
                </div>
                <div className='item-2-social'>
                  <img src='https://d3uyk7qgi7fgpo.cloudfront.net/landings/images/8ca16c2c-07ea-4e11-ac52-bbe28aa80f03-aluno-6.png' />
                  <p>Mussum Ipsum, cacilds vidis litro abertis. Leite de capivaris, leite de mula manquis sem cabeça. A ordem dos tratores não altera o pão duris. Suco de cevadiss deixa as pessoas mais interessantis.  Tá deprimidis, eu conheço uma cachacis que pode alegrar sua vidis. Quem manda na minha terra sou euzis! Admodum accumsan disputationi eu sit. Vide electram sadipscing et per.</p>
                </div>
                <div className='item-3-social'>
                  <img src='https://d3uyk7qgi7fgpo.cloudfront.net/landings/images/4ba33bf3-0244-4db7-8356-fb8e26b450ec-aluna-1.png' />
                  <p>Mussum Ipsum, cacilds vidis litro abertis. Leite de capivaris, leite de mula manquis sem cabeça. A ordem dos tratores não altera o pão duris. Suco de cevadiss deixa as pessoas mais interessantis.  Tá deprimidis, eu conheço uma cachacis que pode alegrar sua vidis. Quem manda na minha terra sou euzis! Admodum accumsan disputationi eu sit. Vide electram sadipscing et per.</p>
                </div>
              </Slider>
          </div>
        );
      }
      }