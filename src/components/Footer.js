import React from 'react'
import BottomFooter from './footers/BottomFooter'
import LeftFooter from './footers/LeftFooter'
import RightFooter from './footers/RightFooter'

export default function Footer() {
  return (
    <footer >
      <LeftFooter />
      <RightFooter />
      <hr></hr>
      <BottomFooter />
      <div className='copyright'>
        &copy; 2021 - <img src='images/blackTLM.png'alt='black TLM Logo'/>
      </div>
    </footer>
  )
}