import React from 'react'
import { useSelector } from 'react-redux';
import { StructureCard } from './StructureCard';

export const Structures = () => {
  const storedStructures = useSelector(state => state.store_structures_reducer)
  const { loading, error, data, error_message } = storedStructures;
  // debugger
  return (
    <section className='container'>
      <h2>Structures</h2>
      <div className='cards__wrapper'>
        {
          loading
          ? <h2> Loading... </h2>
          : error 
            ? <h2>{ error_message }</h2>
            :
            data.map(structure => (
              <StructureCard key={ structure.id } structure={ structure }/>
            ))

        } 
      </div>
    </section>
  )
}
