import { Civilizations } from "../components/Civilizations";
import { Home } from "../components/Home";
import { Structures } from "../components/Structures";
import { Technologies } from "../components/Technologies";
import { Units } from "../components/Units";

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
  // { 
  //     route: '/age-of-empires/civilization/:id',
  //     component: < /> 
  // },
  { 
      page: 'Units',
      route: '/age-of-empires/units',
      component: <Units /> 
  },
  // { 
  //     route: '/age-of-empires/unit/:id',
  //     component: < /> 
  // },
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
  // { 
  //     route: '/age-of-empires/technology/:id',
  //     component: < /> 
  // },
]
  // NotFound: '/error',
