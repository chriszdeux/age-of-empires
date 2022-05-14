import React from 'react'
import { useCivilizations } from '../../hooks/useCivilizations'
import { CivilizationCard } from './CivilizationCard'

export const Civilizations = () => {
  const { data, loading } = useCivilizations()
  return (
    <section className='container'>
      <h2>Civilizations</h2>
      <div className='cards__wrapper'>
        {
          !loading && 
          data.map(civilization => (
            <CivilizationCard key={ civilization.id } civilization={ civilization }/>
          ))
        }
      </div>
    </section>
  )
}
