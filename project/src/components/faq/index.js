import React from 'react'
import './index.scss'

import Question from './question'

const items = [
  {
    question: 'Quem é o melhor ator do mundo?',
    answer: 'Você vai aprender os principais conceitos de HTML, CSS e Javascript em um final de semana, através de uma experiência imersiva. Nele você vai conhecer as ferramentas de aprendizagem efetivas para começar sua jornada em tech.'
  },
  {
    question: 'Quem foi maior? danny devito ou jesus',
    answer: 'Logicamente é o danny devito'
  },
  {
    question: 'Qual foi a melhor pessoa que existiu no mundo?',
    answer: 'Logicamente é o danny devito'
  },
  {
    question: 'Qual foi a melhor pessoa que existiu no mundo?',
    answer: 'Logicamente é o danny devito'
  },
  {
    question: 'Qual foi a melhor pessoa que existiu no mundo?',
    answer: 'Logicamente é o danny devito'
  }
]

export default class Faq extends React.Component {
  render() {
    return (
      <div className='container-faq'>
        <span className='title-faq'>Perguntas frequentes</span>
        <ul className='faq-list'>
          {items.map((item, index) => (
            <li className='single-faq'>
              <Question
                item={item} 
                index={index}
              />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}