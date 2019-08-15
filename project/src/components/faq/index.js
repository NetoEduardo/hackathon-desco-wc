import React from 'react'
import './index.scss'

import Question from './question'

const items = [
  {
    question: 'quem é o melhor ator do mundo?',
    answer: 'logicamente é o danny devito'
  },
  {
    question: 'quem foi maior? danny devito ou jesus',
    answer: 'logicamente é o danny devito'
  },
  {
    question: 'qual foi a melhor pessoa que existiu no mundo?',
    answer: 'logicamente é o danny devito'
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