import React from 'react'
import './index.scss'

export default class Hero extends React.Component {

  render() {
    return(
        <div className='container-hero' >
            <h1 className='h1-title-hero'>HERO</h1>
            <h2 className='h2-subtitle-hero'>DANNY DEVITO!!! <br /> DANNY DEVITO!!!</h2>
        </div>
    );
  }
}