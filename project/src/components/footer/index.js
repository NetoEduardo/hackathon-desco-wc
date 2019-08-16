import React from 'react'

import './index.scss'
import content from './data.js'

import apple from '../../assets/apple-store-icon.svg';
import android from '../../assets/google-play-icon.svg';
import logo from '../../assets/descomplica2.svg';

export default class Footer extends React.Component {

  render() {
    return(
        <section className='container-footer'>
          <div className='wrapper-footer'>
            <header className='header'>
              <a href='/'>
                <div tabIndex="24" className='logo-footer' alt='logo-descomplica' />
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
                      <img src={ apple } alt='' />
                    </li>
                    <li className='android' alt='Clique aqui para acessar o aplicativo para android.'>
                      <img src={ android } alt='' />
                    </li>
              </ul>
            </div>
          </div>
          <footer className='rodape'>
            <a tabIndex="44" href='/' alt='Clique aqui para voltar para a home do descomplica'>
              <div className='logo-menor' />
            </a>
            <ul className='images'>
                <li>
                  <a tabIndex="45" href='https://www.facebook.com/descomplica.vestibulares/' alt='Clique aqui para acessar o facebook do descomplica.'>
                    <div className='facebook' />
                  </a>
                </li>
                <li>
                  <a tabIndex="46" href='https://twitter.com/descomplica' alt='Clique aqui para acessar o twitter do descomplica.'>
                    <div className='twitter' />
                  </a>
                </li>
                <li>
                  <a tabIndex="47" href='https://www.youtube.com/c/descomplica' alt='Clique aqui para acessar o youtube do descomplica.'>
                    <div className='youtube' />
                  </a>
                </li>
                <li>
                  <a tabIndex="48" href='https://www.instagram.com/descomplica/' alt='Clique aqui para acessar o instagram do descomplica.'>
                    <div className='instagram' />
                  </a>
                </li>
            </ul>
          </footer>
          </div>
        </section>
    );
  }
}