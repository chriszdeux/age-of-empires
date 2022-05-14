import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import { Civilizations } from '../components/Civilizations';
import { Home } from '../components/Home';
import { Structures } from '../components/Structures';
import { Technologies } from '../components/Technologies';
import { Units } from '../components/Units';

export const MainRouter = () => {
  return (
    <>
    <Router>
      <div>

      <Routes>
        <Route path="/" element={ <Home /> }/>
        <Route path="/app" element={ <Home /> }/>
        <Route path="/app/civilizations" element={ <Civilizations /> }/>
        <Route path="/app/units" element={ <Units /> }/>
        <Route path="/app/structures" element={ <Structures /> }/>
        <Route path="/app/technology" element={ <Technologies /> }/>
      </Routes>
    </div>
    </Router>
    </>
  )
}
