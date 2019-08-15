import React from 'react'

import './index.scss'
import content from './data.js'

export default class Footer extends React.Component {

  render() {
    return(
        <div className='container-footer' >
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
          </div>
        </div>
    );
  }
}