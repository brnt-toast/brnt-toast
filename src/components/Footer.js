import React from 'react'
import Linkify from 'react-linkify'

import '../styles/Footer.sass'

export default function Footer() {
  return (
    <div className="Footer">
        hello from footer.js
        <Linkify>
            <a 
                target='_blank' 
                href='https://github.com/tasti/react-linkify/'
            > 
                Linkify
            </a>
        </Linkify>
    </div>
  )
}
