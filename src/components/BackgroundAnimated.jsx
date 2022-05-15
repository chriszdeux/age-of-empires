import React from 'react'
import { icons } from '../data/icons'

export const BackgroundAnimated = () => {
  return (
    <div className='background__animated'>
      <span className=''>
        { icons.attack_icon }
      </span>
      <span className='' 
      style={{ animationDelay: '1s' }}
      >
        { icons.armor_icon }
      </span>
  
      <canvas className='circle--1'></canvas>
      <canvas className='circle--2'></canvas>
      <canvas className='squad--1'></canvas>
    </div>
  )
}
