import React from 'react'
import { IoTerminal } from 'react-icons/io5'
import { useSelector } from 'react-redux'
import { useCivilizations } from '../../hooks/useCivilizations'
import { CivilizationCard } from './CivilizationCard'

export const Civilizations = () => {
  const saveCivilizations = useSelector(state => state.civilizations_reducer)
  const { loading, error, data, error_message } = saveCivilizations;
  // debugger
  // const { error_message } = error && error
  // debugger
  return (
    <section className='container'>
      <h2>Civilizations</h2>
      <div className='cards__wrapper'>
        {
          loading
          ? <h2> Loading... </h2>
          : error 
            ? <h2>{ error_message }</h2>
            :
            data.map(civilization => (
              <CivilizationCard key={ civilization.id } civilization={ civilization }/>
            ))

        }
      </div>
    </section>
  )
}
