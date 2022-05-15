import React from 'react'
import { useSelector } from 'react-redux'
import { CivilizationCard } from '../Civilizations/CivilizationCard'
import { StructureCard } from '../Structures/StructureCard'
import { TechnologyCard } from '../Technologies/TechnologyCard'
import { UnitCard } from '../Units/UnitCard'

export const MyLibrary = () => {
  // const 
  const civilization = useSelector(state => state.add_civilization_reducer)
  const units = useSelector(state => state.add_unit_reducer)
  const structures = useSelector(state => state.add_structure_reducer)
  const technologies = useSelector(state => state.add_technology_reducer)

  // debugger
  return (
    <section className='container'>
    {
      civilization.length > 0 &&
      <div>
        <h2>Civilizations</h2>
        <div className='cards__wrapper'>
          {
            civilization.map(civilization => (
              <CivilizationCard key={ civilization.name } civilization={ civilization }/>
            ))
          }
          </div>
      </div>
      }
    {
      units.length > 0 &&
      <div>
        <h2>Units</h2>
        <div className='cards__wrapper'>
          {
            units.map(unit => (
              <UnitCard key={ unit.name } unit={ unit }/>
            ))
          }
          </div>
      </div>
      }
    {
      structures.length > 0 &&
      <div>
        <h2>Structures</h2>
        <div className='cards__wrapper'>
          {
            structures.map(structure => (
              <StructureCard key={ structure.name } structure={ structure }/>
            ))
          }
          </div>
      </div>
      }
    {
      technologies.length > 0 &&
      <div>
        <h2>Technologies</h2>
        <div className='cards__wrapper'>
          {
            technologies.map(technology => (
              <TechnologyCard key={ technology.name } technology={ technology }/>
            ))
          }
          </div>
      </div>
      }
    </section>
  )
}
