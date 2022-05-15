import React from 'react'
import { useSelector } from 'react-redux';
import { UnitCard } from './UnitCard'

export const Units = () => {
  const storeUnits = useSelector(state => state.store_units_reducer)
  // debugger
  const { loading, error, data, error_message } =  storeUnits;
  // debugger
  return (
    <section className='container'>
      <h2>Units</h2>
      <div className='cards__wrapper'>
        {
          loading
          ? <h2> Loading... </h2>
          : error 
            ? <h2>{ error_message }</h2>
            :
            data.map(unit => (
              <UnitCard key={ unit.id } unit={ unit }/>
            ))

        } 
      </div>
    </section>
  )
}
