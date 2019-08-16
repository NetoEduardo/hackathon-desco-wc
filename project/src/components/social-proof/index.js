import React from 'react'
import Slider from 'react-slick'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import livia from '../../images/V5-livia.png';
import barbara from '../../images/V5-barbara.png';
import matheus from '../../images/V5-matheus.png';


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
            <section className='central-social-proof'>
              <Slider className='slider-social' {...settings}>
                <div className='item-1-social'>
                    <img src={ barbara } />
                    <p>"Muito bom! O melhor custo benefício do mercado!!! É claro que existe sempre um professor melhor, uma matéria da qual gostamos mais etc!! Mas, no geral o curso é muito bom e tem correspondido as expectativas!! Recomendo o curso para quem deseja se aperfeiçoar!"</p>
                    <span>Barbara Barbosa</span>
                </div>
                <div className='item-2-social'>
                    <img src={ matheus } />
                    <p>"Excelente curso! Além de ótimas aulas, o curso é extremamente sério. Recomendo à todos que desejam um curso com ótimo custo benefício e qualidade. Obg."</p>
                    <span>Matheus Rubello</span>
                </div>
                <div className='item-3-social'>
                    <img src={ livia } />
                    <p>“O descomplica foi essencial no meu processo de aprendizagem e esclarecimento de dúvidas durante toda minha jornada para aprovação no enem, super indico.”</p>
                    <span>Lívia Albuquerque</span>
                </div>
              </Slider>
              <button className='green-button'>Começar a estudar</button>
            </section>
          </div>
        );
      }
      }