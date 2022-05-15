import { Civilizations } from "../components/Civilizations";
import { CivilizationFullView } from "../components/Civilizations/CivilizationFullView";
import { Home } from "../components/Home";
import { Structures } from "../components/Structures";
import { Technologies } from "../components/Technologies";
import { TechnologyFullView } from "../components/Technologies/TechnologyFullView";
import { Units } from "../components/Units";
import { UnitFullView} from "../components/Units/UnitFullView";

export const RoutesApp = [

  { 
      page: '',
      route: '/' || '/age-of-empires',
      component: <Home /> 
  },
  { 
      page: 'Home',
      route: '/age-of-empires',
      component: <Home /> 
  },
  { 
      page: 'Civilizations',
      route: '/age-of-empires/civilizations',
      component: <Civilizations /> 
    },
    { 
      page: '',
      route: '/age-of-empires/civilization/:name',
      component: <CivilizationFullView /> 
  },
  { 
      page: 'Units',
      route: '/age-of-empires/units',
      component: <Units /> 
  },
  { 
      page: '',
      route: '/age-of-empires/unit/:id',
      component: <UnitFullView /> 
  },
  { 
      page: 'Structures',
      route: '/age-of-empires/structures',
      component: <Structures /> 
  },
  // { 
  //     route: '/age-of-empires/structures/:id',
  //     component: < /> 
  // },
  { 
      page: 'Technologies',
      route: '/age-of-empires/technologies',
      component: <Technologies /> 
  },
  {   page: '',
      route: '/age-of-empires/technology/:id',
      component: <TechnologyFullView /> 
  },
]
  // NotFound: '/error',
