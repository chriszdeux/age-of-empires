import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import { Civilizations } from '../components/Civilizations';
import { Header } from '../components/header';
import { MobileNavbar } from '../components/header/MobileNavbar';
import { Home } from '../components/Home';
import { Structures } from '../components/Structures';
import { Technologies } from '../components/Technologies';
import { Units } from '../components/Units';
import { RoutesApp } from '../constants/routes';

export const MainRouter = () => {
  const [show, setShow] = useState(false)
  const handleShow = () => {
    setTimeout(() => {
      setShow(!show)
    }, 300);
  }
  return (
    <>
    <Router>
      <Header values={{ show, handleShow }}/>
      <Routes>
        {
          RoutesApp.map(({ route, component }) => (
            <Route path={ route } element={ component } key={ route }/>
          ) )
        }
      </Routes>
      {
          show && <MobileNavbar handleShow={ handleShow }/>
        }
    </Router>
    </>
  )
}
