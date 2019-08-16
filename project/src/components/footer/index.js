import React from 'react'

import './index.scss'
import content from './data.js'

import apple from '../../assets/apple-store-icon.svg';
import android from '../../assets/google-play-icon.svg';
import logoMenor from '../../assets/small-descomplica-icon.svg';
import logo from '../../assets/descomplica2.svg';
import facebook from '../../assets/fb-icon.svg';
import twitter from '../../assets/twitter-icon.svg';
import youtube from '../../assets/youtube-icon.svg';
import instagram from '../../assets/instagram-icon.svg';

export default class Footer extends React.Component {

  render() {
    return(
        <section className='container-footer'>
          <div className='wrapper-footer'>
            <header className='header'>
              <a href='/'>
                <img tabIndex="24" className='logo' alt='logo-descomplica' src={ logo } />
              </a>
            </header>
            <div className='categories'>
              {content.map((category, index) => (
                <div className='column'>
                  <h2 className='column-title'>{category.title}</h2>
                  <ul className='links'>
                    {category.subcategories.map((subcategory, index) => (
                      <li>
                        <a tabIndex={25 + index}href={subcategory.link}>{subcategory.title}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            <div className='column'>
              <h2 className='column-title'>Comprar um plano</h2>
              <ul className='links'>
                    <li className='telefone' alt='Clique aqui para ligar.'>Fale com a gente</li>
                    <li className='numero'>0800 001 7572</li>
                    <li className='zip-zop' alt='Clique aqui para mandar um whatsapp.'>Manda um Whatsapp</li>
                    <li className='numero'>(21) 99884-3853</li>
              </ul>
            </div>
            <div className='column'>
              <h2 className='column-title'>App Descomplica</h2>
              <ul className='links' id='online-store'>
                    <li className='apple' alt='Clique aqui para acessar o aplicativo para iphone.'>
                      <img src={ apple } />
                    </li>
                    <li className='android' alt='Clique aqui para acessar o aplicativo para android.'>
                      <img src={ android } />
                    </li>
              </ul>
            </div>
          </div>
          <footer className='rodape'>
            <a tabIndex="44" href='/' alt='Clique aqui para voltar para a home do descomplica'>
              <img className='logo-menor' src='https://d3awytnmmfk53d.cloudfront.net/landings/static/images/pos-grad/small-descomplica-icon.svg' />
            </a>
            <ul className='images'>
                <li>
                  <a tabIndex="45" href='https://www.facebook.com/descomplica.vestibulares/' alt='Clique aqui para acessar o facebook do descomplica.'>
                    <img src='https://d3awytnmmfk53d.cloudfront.net/landings/static/images/pos-grad/fb-icon.svg' />
                  </a>
                </li>
                <li>
                  <a tabIndex="46" href='https://twitter.com/descomplica' alt='Clique aqui para acessar o twitter do descomplica.'>
                    <img src='https://d3awytnmmfk53d.cloudfront.net/landings/static/images/pos-grad/twitter-icon.svg' />
                  </a>
                </li>
                <li>
                  <a tabIndex="47" href='https://www.youtube.com/c/descomplica' alt='Clique aqui para acessar o youtube do descomplica.'>
                    <img src='https://d3awytnmmfk53d.cloudfront.net/landings/static/images/pos-grad/youtube-icon.svg' />
                  </a>
                </li>
                <li>
                  <a tabIndex="48" href='https://www.instagram.com/descomplica/' alt='Clique aqui para acessar o instagram do descomplica.'>
                    <img src='https://d3awytnmmfk53d.cloudfront.net/landings/static/images/pos-grad/instagram-icon.svg' />
                  </a>
                </li>
            </ul>
          </footer>
          </div>
        </section>
    );
  }
}