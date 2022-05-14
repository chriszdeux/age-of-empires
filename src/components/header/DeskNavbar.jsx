import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { RoutesApp } from '../../constants/routes'
export const DeskNavbar = () => {
  const [routes, setRoutes] = useState([])
  useEffect(() => {
    setRoutes( RoutesApp.filter(route => {
      return route.page.length > 0
    }) )
  }, [])
  return (
    <nav className='desk__nav'>
      <ul className='desk__routes'>
        {
          routes.map(({ page, route }) => (
            <Link key={ route } to={ route }>{ page }</Link>
          ))
        }
      </ul>
    </nav>
    )
}
