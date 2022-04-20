import React from 'react'
import Linkify from 'react-linkify'

export default function Footer() {
  return (
    <>
        hello from footer.js
        <Linkify>
            <a 
                target='_blank' 
                href='https://github.com/tasti/react-linkify/'
            > 
                Linkify
            </a>
        </Linkify>
    </>
  )
}
