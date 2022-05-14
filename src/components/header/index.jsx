import React, { useState } from 'react'
import { icons } from '../../data/icons'
import { DeskNavbar } from './DeskNavbar'
import { MobileNavbar } from './MobileNavbar'

export const Header = () => {
  const [show, setShow] = useState(false)
  const handleShow = () => {
    setTimeout(() => {
      setShow(!show)
    }, 300);
  }
  const { menu_icon, close_icon } = icons
  // debugger
  return (
    <header className='header'>
      <h2 className='header--title'>AoE II</h2>
      <span onClick={ handleShow } className="header--menu">
        { !show  ? menu_icon : close_icon}
      </span>
      {
        show && <MobileNavbar handleShow={ handleShow }/>
      }
      <DeskNavbar />
    </header>
  )
}
