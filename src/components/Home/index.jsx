import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { scrollTop } from '../../data/scrollTop'
import { ListRegularCards } from '../cards/ListRegularCards'
export const Home = () => {
  useEffect(() => {
    scrollTop()
  }, [ ])
// debugger
  return (
    <main className='container'>
      <h2>Welcome to Age of Empires 2</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis at facere tempora odit, enim asperiores.</p>
    </main>
  )
}
