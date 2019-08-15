import React from 'react'

import ArrowFaq from '../../images/arrow-faq.js'

export default class Question extends React.Component {
  state = {
    isOpen: false,
  }

  renderAnswer = (answer, index) => {
    if (!answer) {
      return null;
    }

    return (
      <p className={`question-answer-${index}`}>{answer}</p>
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
      <div className='container-question-faq'>
        <span className={`question-faq-number-${index}`}>{index + 1}</span>
        <span className={`question-title-${index}`}>{item.question}</span>
        <div onClick={this.handleTabOpen}>
          <ArrowFaq />
        </div>
        {isOpen && this.renderAnswer(item.answer, index)}
      </div>
    );
  }
}
