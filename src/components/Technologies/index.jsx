import React from 'react'
import { useSelector } from 'react-redux';
import { TechnologyCard } from './TechnologyCard';

export const Technologies = () => {
  const storedTechnologies = useSelector(state => state.store_technologies_reducer)
  // debugger
  const { loading, error, data, error_message } =  storedTechnologies;
  // debugger
  return (
    <section className='container'>
      <h2>Technologies</h2>
      <div className='cards__wrapper'>
        {
          loading
          ? <h2> Loading... </h2>
          : error 
            ? <h2>{ error_message }</h2>
            :
            data.map(technology => (
              <TechnologyCard key={ technology.id } technology={ technology }/>
            ))

        } 
      </div>
    </section>
  )
}
