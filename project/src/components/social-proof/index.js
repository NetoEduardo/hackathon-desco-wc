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
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  fade: true,
  cssEase: 'linear',
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
                    <img src={ barbara } alt='Na imagem, a foto de perfil da aluna Bábara Barbosa.'/>
                    <p>"Muito bom! O melhor custo benefício do mercado!!! No geral o curso é muito bom e tem correspondido as expectativas!! Recomendo o curso para quem deseja se aperfeiçoar!"</p>
                    <span>Barbara Barbosa</span>
                </div>
                <div className='item-2-social'>
                    <img src={ matheus } alt='Na imagem, a foto de perfil do aluno Matheus Rubello.'/>
                    <p>"Excelente curso! Além de ótimas aulas, o curso é extremamente sério. Recomendo à todos que desejam um curso com ótimo custo benefício e qualidade. Obg."</p>
                    <span>Matheus Rubello</span>
                </div>
                <div className='item-3-social'>
                    <img src={ livia } alt='Na imagem, a foto de perfil da aluna Lívia Albuquerque.'/>
                    <p>“O descomplica foi essencial no meu processo de aprendizagem e esclarecimento de dúvidas durante toda minha jornada para aprovação no enem, super indico.”</p>
                    <span>Lívia Albuquerque</span>
                </div>
              </Slider>
              <button className='green-button' onClick={this.props.onClick}>Começar a estudar</button>
            </section>
          </div>
        );
      }
      }