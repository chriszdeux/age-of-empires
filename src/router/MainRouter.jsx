import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import { Civilizations } from '../components/Civilizations';
import { Header } from '../components/header';
import { Home } from '../components/Home';
import { Structures } from '../components/Structures';
import { Technologies } from '../components/Technologies';
import { Units } from '../components/Units';
import { RoutesApp } from '../constants/routes';

export const MainRouter = () => {
  return (
    <>
    <Router>
      <Header />
      <Routes>
        {
          RoutesApp.map(({ route, component }) => (
            <Route path={ route } element={ component } key={ route }/>
          ) )
        }
      </Routes>
    </Router>
    </>
  )
}
