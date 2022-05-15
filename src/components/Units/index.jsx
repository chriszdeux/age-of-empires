import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { UnitCard } from './UnitCard'
import queryString from 'query-string'
import { useForm } from '../../hooks/useForm';
import { useSearch } from '../../hooks/useSearch';
import { scrollTop } from '../../data/scrollTop';
export const Units = () => {
  const storeUnits = useSelector(state => state.store_units_reducer)
  // debugger
  const { loading, error, data, error_message } =  storeUnits;
  // debugger
  const navigate = useNavigate();
  const location = useLocation();
  const query = queryString.parse(location.search);
  const { search } = query
  const { handleOnChange, inputValues } = useForm({
    unit: search
  })
  const { unit } = inputValues
  const searching = useSearch( unit, data )

  const handleSubmit = ( e ) => {
    e.preventDefault()
    // navigate(`$search=${ unit }`)
  }
  useEffect(() => {
    scrollTop()
  }, [ ])
  return (
    <section className='container'>
      <div className='section__header'>
        <h2>Units</h2>
        <form onSubmit={ handleSubmit }>
          <input type="text" name="unit" value={ unit } onChange={ handleOnChange }/>
        </form>
      </div>
      <div className='cards__wrapper'>
        {
          loading
          ? <h2> Loading... </h2>
          : error 
            ? <h2>{ error_message }</h2>
            : data?.status === 0
              ? <h2>Network Error</h2>
              :
                searching.map(unit => (
                  <UnitCard key={ unit.id } unit={ unit }/>
                ))

        } 
      </div>
    </section>
  )
}
