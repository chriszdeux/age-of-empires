import React, { useEffect, useState } from 'react'
import { IoTerminal } from 'react-icons/io5'
import { useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import { useCivilizations } from '../../hooks/useCivilizations'
import { useForm } from '../../hooks/useForm'
import { useSearch } from '../../hooks/useSearch'
import { CivilizationCard } from './CivilizationCard'
import queryString from 'query-string';
import { scrollTop } from '../../data/scrollTop'
export const Civilizations = () => {
  const storedCivilizations = useSelector(state => state.store_civilizations_reducer)
  const { loading, error, data, error_message } = storedCivilizations;
  // debugger
  useEffect(() => {
    scrollTop()
  }, [ ])
  const navigate = useNavigate();
  const location = useLocation();
  const query = queryString.parse(location.search);
  const { search } = query
  const { handleOnChange, inputValues } = useForm({
    civilization: search
  })
  const { civilization } = inputValues
  const searching = useSearch( civilization, data )

  const handleSubmit = ( e ) => {
    e.preventDefault()
    // navigate(`$search=${ civilization }`)
  }

  // debugger
  return (
    <section className='container'>
      <div className='section__header'>
        <h2>Civilizations</h2>
        <form onSubmit={ handleSubmit }>
          <input type="text" name="civilization" value={ civilization } onChange={ handleOnChange }/>
        </form>
      </div>
      <div className='cards__wrapper'>
        {
          loading
          ? <h2> Loading... </h2>
          : error 
            ? <h2>{ error_message }</h2>
            : data?.status === 0
              ? <h2>Network error</h2>
              :
                searching.length === 0
                  ? <h2>Not Civilization Found</h2>
                  :
                    searching.map(civilization => (
                      <CivilizationCard key={ civilization.id } civilization={ civilization }/>
                    ))

        }
      </div>
    </section>
  )
}
