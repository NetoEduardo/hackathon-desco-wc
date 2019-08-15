import React from 'react'
import './index.scss'

export default class Categories extends React.Component {

  render() {

  const { 
      id, 
      className
    } = this.props

  return(
    <div id={id} className={className} >
      <h1 className='first-title'>CATEGORIES</h1>
      <h2 className='second-title'>DANNY DEVITO</h2>
    </div>
  );
}
}