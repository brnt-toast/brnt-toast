import React from 'react'
import {useState} from 'react'

import '../styles/Accordion.sass'

export default function Accordion() {

  const [toggle, setToggle] = useState('false')

  function hello () {
    console.log(toggle)
  }

  return (
    <div className='Acorrdion'>
      <div className="Acorrdion--title">
        <button 
          className="Acorrdion--btn"
          onClick={() => setToggle(!toggle)}
        >
          <i className="Acorrdion--title-icon">{toggle ? '+': '-'}</i>
        </button>
        this is a title

      </div>
      {toggle && (
        <div className="Acorrdion--content">
        <p className="Acorrdion--content-toggle">
            this is some conent
          </p>
        </div>
      )}
    </div> // Acorrdion
  )
}
