import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import { saveCivilizations } from '../actions/actionsCivilization';
import { Civilizations } from '../components/Civilizations';
import { Header } from '../components/header';
import { MobileNavbar } from '../components/header/MobileNavbar';
import { Home } from '../components/Home';
import { Structures } from '../components/Structures';
import { Technologies } from '../components/Technologies';
import { Units } from '../components/Units';
import { RoutesApp } from '../constants/routes';
import { useCivilizations } from '../hooks/useCivilizations';
import { useStructures } from '../hooks/useStructures';
import { useTechnologies } from '../hooks/useTechnologies';
import { useUnits } from '../hooks/useUnits';

export const MainRouter = () => {

  const civilizationsData = useCivilizations();
  const unitsData = useUnits();
  const structureData = useStructures();
  const technologiesData = useTechnologies();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(saveCivilizations(civilizationsData))
  }, [  civilizationsData ])

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
