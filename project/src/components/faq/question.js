import React from 'react'
import './question.scss'

import ArrowFaq from '../../assets/arrow-faq.js'

export default class Question extends React.Component {
  state = {
    isOpen: false,
  }

  renderAnswer = (answer, index) => {
    if (!answer) {
      return null;
    }

    return (
      <div className={`question-answer-container`}>
        <p className={`question-answer`}>{answer}</p>
        {/* <button className='faq-button'>Assinar agora</button> */}
      </div>
    );
  }

  handleTabOpen = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    const { item, index } = this.props
    const { isOpen } = this.state

    return (
      <div tabIndex={17 + index} className={`container-question-faq${isOpen ? ' active' : ' deactivate'}`} onClick={this.handleTabOpen}>
          <span className={`question-faq-number`}>0{index + 1}</span>
          <span className={`question-faq-title${isOpen ? ' active' : ' deactivate'}`}>{item.question}</span>
          <div className={`question-faq-arrow${isOpen ? ' active': ' deactivate'}`}>
            <ArrowFaq />
          </div>
          {isOpen && this.renderAnswer(item.answer, index)}
      </div>
    );
  }
}
