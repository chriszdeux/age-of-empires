import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { icons } from '../../data/icons'
import { useFindData } from '../../hooks/useFindData'
import { useSearch } from '../../hooks/useSearch'
import { TechnologyCard } from '../Technologies/TechnologyCard'
import { UnitCard } from '../Units/UnitCard'
import { CivilizationCard } from './CivilizationCard'

export const CivilizationFullView = () => {
  const civilization = useSelector(state => state.handle_data_reducer)
  const { unique_unit, unique_tech } = civilization
  const { data:unitsData } = useSelector( state => state.store_units_reducer )
  const { data:techData } = useSelector( state => state.store_technologies_reducer )
  // const [structure, setStructure] = useState({})
  const [unitSelected, setUnitSelected] = useState('');
  const [technologySelected, setTechnologySelected] = useState('');
  const unit = useFindData(unitSelected, unitsData)
  const technology = useFindData(technologySelected, techData)
  // debugger
  useEffect(() => {
    if(unique_unit.length > 0) {
      const split = unique_unit[0]?.split('/')
      setUnitSelected(split[split.length - 1])

    }

    if( unique_tech.length > 0 ) {
      const split2 = unique_tech[0]?.split('/')
      // debugger
      setTechnologySelected(split2[split2.length - 1])

    }
 
  }, [ unique_unit, unique_tech ])

  // console.log(unit)
  // debugger
  return (
    <section className='container full__view'>
      <h2>Full view</h2>
        <div className='cards__wrapper'>
          <div className='card__container'>
            <h2>Civilization</h2>
            <CivilizationCard civilization={civilization}/>
          </div>
          { icons.next_icon }
          <div className='card__container'>
            <h2>{ Object.keys( unit ).length > 0 ? 'Special Unit' : 'Not Special Unit' }</h2>
            {
              Object.keys(unit).length > 0 &&
              // <h1>unit selected</h1>
              <>
              <UnitCard unit={ unit }/>
              </>
            }
          </div>
          { icons.next_icon }
          <div className='card__container'>
            <h2>{ Object.keys( technology ).length > 0 ? 'Special Technology' : 'Not Special Technology' }</h2>
            {
              Object.keys(technology).length > 0 &&
              // <h1>unit selected</h1>
              <>
              <TechnologyCard technology={ technology }/>
              </>
            }
          </div>       
      </div>
    </section>
  )
}
