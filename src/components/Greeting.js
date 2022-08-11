import React from 'react'

import '../styles/Greeting.sass'

export default function Greeting() {
  return (
    <div className='Greeting'>
        {/* hello from Greeting.js */}
        <header className="Greeting--header">
          <h1 className="Greeting--hello">
           HELLO,
          </h1>
          <h2 className="Greeting--name">
              .:. I'M <span>.:. B R (E) N T .:.</span>
          </h2>
          <p>You may have noticed how simple the page is, and you wouldn't be wrong. The magic is in the text .. resize the window ..</p>
        </header>
    </div>
  )
}
