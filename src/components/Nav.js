import React from 'react'

import '../styles/Nav.sass'

export default function Nav() {
  return (
    <div className='Nav'>
        {/* hello from Nav.js */}
        <header className="Nav--header">
          <h1 className="Nav--hello">
           HELLO,
          </h1>
          <h2 className="Nav--name">
              .:. I'M <span>.:. B R (E) N T .:.</span>
          </h2>
        </header>
    </div>
  )
}
