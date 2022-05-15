import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { icons } from '../../data/icons'
import { useFindData } from '../../hooks/useFindData'
import { StructureCard } from '../Structures/StructureCard'
import { UnitCard } from '../Units/UnitCard'
import { TechnologyCard } from './TechnologyCard'

export const TechnologyFullView = () => {
  const technology = useSelector(state => state.handle_data_reducer)
  const { develops_in, applies_to } = technology
  const { data:structureData } = useSelector( state => state.store_structures_reducer )
  const { data:unitsData } = useSelector( state => state.store_units_reducer )
  
  const [structureSelected, setStructureSelected] = useState('')
  const [unitSelected, setUnitSelected] = useState('')

  const structure = useFindData(structureSelected, structureData)
  const unit = useFindData(unitSelected, unitsData)

  useEffect(() => {
    if(develops_in.length > 0) {
      const split = develops_in.split('/')
      setStructureSelected(split[split.length - 1])

    }

    if( applies_to.length > 0 ) {
      const split2 = applies_to[0]?.split('/')
      // debugger
      setUnitSelected(split2[split2.length - 1])

    }
 
  }, [ develops_in, applies_to ])

  // debugger
  return (
    <section className='container full__view'>
      <h2>Full view</h2>
        <div className='cards__wrapper'>
          <div className='card__container'>
            <h2>Technology</h2>
            <TechnologyCard technology={technology}/>
          </div>
          { icons.next_icon }
          <div className='card__container'>
            <h2>{ Object.keys( structure ).length > 0 ? 'Created In' : 'Not Info' }</h2>
            {
              Object.keys(structure).length > 0 &&
              // <h1>unit selected</h1>
              <>
              <StructureCard structure={ structure }/>
              </>
            }
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
                 
      </div>
    </section>
  )
}
