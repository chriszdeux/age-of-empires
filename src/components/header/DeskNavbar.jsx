import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
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
            <NavLink key={ route } to={ route } className={ (nav) => nav.isActive ? 'active-nav' : '' }>{ page }</NavLink>
          ))
        }
      </ul>
    </nav>
    )
}
