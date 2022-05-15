import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { animations } from '../../data/animations'
import { scrollTop } from '../../data/scrollTop'
import { ListRegularCards } from '../cards/ListRegularCards'
export const Home = () => {
  useEffect(() => {
    scrollTop()
  }, [ ])
// debugger
const { fade_in } = animations
  return (
    <main className='container main'>
      <h1 className={`${ fade_in }`} style={{
        animationDelay: '.5s'
      }}>Welcome to Age of Empires 2</h1>
      <p className={`${ fade_in }`} style={{
        animationDelay: '1s'
      }}>Check the information of each Structures, Units, Technologies and Civilizations in the world of <span>Age of Empires 2</span></p>
    </main>
  )
}
