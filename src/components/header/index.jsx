import React, { useState } from 'react'
import { icons } from '../../data/icons'
import { DeskNavbar } from './DeskNavbar'
import { MobileNavbar } from './MobileNavbar'

export const Header = ({ values }) => {
  const { handleShow, show } = values
const { menu_icon, close_icon } = icons
  // debugger
  return (
    <header className='header'>
      <h2 className='header--title'>AoE II</h2>
      <span onClick={ handleShow } className="header--menu">
        { !show  ? menu_icon : close_icon}
      </span>
      
      <DeskNavbar />
    </header>
  )
}
