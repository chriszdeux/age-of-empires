import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { RoutesApp } from '../../constants/routes'
export const MobileNavbar = ({ handleShow }) => {
  const [routes, setRoutes] = useState([])
  useEffect(() => {
    setRoutes( RoutesApp.filter(route => {
      return route.page.length > 0
    }) )
  }, [])
  return (
    <nav className='mobile__nav'>
      <ul className='nav__routes'>
        {
          routes.map(({ page, route }) => (
            <Link key={ route } onClick={ handleShow } to={ route }>{ page }</Link>
          ))
        }
      </ul>
      <canvas className='glass'></canvas>
    </nav>
    )
}
