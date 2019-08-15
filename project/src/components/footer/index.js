import React from 'react'

import './index.scss'
import content from './data.js'

const rodapedata = [
  {
    path: 'https://d3awytnmmfk53d.cloudfront.net/landings/static/images/pos-grad/fb-icon.svg',
    link:''
  }
]
export default class Footer extends React.Component {

  render() {
    return(
        <div className='container-footer' >
          <header className='header'>
            <a href='/'>
              <img className='logo' src='https://d3awytnmmfk53d.cloudfront.net/landings/static/images/descomplica2.svg' />
            </a>
          </header>
          <div className='categories'>
            {content.map((category, index) => (
              <div className='column'>
                <h2 className='column-title'>{category.title}</h2>
                <ul className='links'>
                  {category.subcategories.map((subcategory, index) => (
                    <li>
                      <a href={subcategory.link}>{subcategory.title}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div className='column'>
              <h2 className='column-title'>Comprar um plano</h2>
              <ul className='links'>
                    <li className='telefone'>Fale com a gente</li>
                    <li>0800 001 7572</li>
                    <li className='zip-zop'>Manda um Whatsapp</li>
                    <li>(21) 99884-3853</li>
              </ul>
            </div>
            <div className='column'>
              <h2 className='column-title'>App Descomplica</h2>
              <ul className='links' id='online-store'>
                    <li className='apple'>
                      <img src='https://d3awytnmmfk53d.cloudfront.net/landings/static/images/pos-grad/apple-store-icon.svg' />
                    </li>
                    <li className='android'>
                      <img src='https://d3awytnmmfk53d.cloudfront.net/landings/static/images/pos-grad/google-play-icon.svg' />
                    </li>
              </ul>
            </div>
          </div>
          <footer className='rodape'>
            <a href='/'>
              <img className='logo-menor' src='https://d3awytnmmfk53d.cloudfront.net/landings/static/images/pos-grad/small-descomplica-icon.svg' />
            </a>
            <ul className='images'>
                <li>
                  <a href='https://www.facebook.com/descomplica.vestibulares/'>
                    <img src='https://d3awytnmmfk53d.cloudfront.net/landings/static/images/pos-grad/fb-icon.svg' />
                  </a>
                </li>
                <li>
                  <a href='https://twitter.com/descomplica'>
                    <img src='https://d3awytnmmfk53d.cloudfront.net/landings/static/images/pos-grad/twitter-icon.svg' />
                  </a>
                </li>
                <li>
                  <a href='https://www.youtube.com/c/descomplica'>
                    <img src='https://d3awytnmmfk53d.cloudfront.net/landings/static/images/pos-grad/youtube-icon.svg' />
                  </a>
                </li>
                <li>
                  <a href='https://www.instagram.com/descomplica/'>
                    <img src='https://d3awytnmmfk53d.cloudfront.net/landings/static/images/pos-grad/instagram-icon.svg' />
                  </a>
                </li>
            </ul>
          </footer>
        </div>
    );
  }
}