import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { useSearch } from '../../hooks/useSearch';
import { TechnologyCard } from './TechnologyCard';
import queryString from 'query-string'
import { scrollTop } from '../../data/scrollTop';
export const Technologies = () => {
  const storedTechnologies = useSelector(state => state.store_technologies_reducer)
  // debugger
  const { loading, error, data, error_message } =  storedTechnologies;
  // debugger
  const navigate = useNavigate();
  const location = useLocation();
  const query = queryString.parse(location.search);
  const { search } = query
  const { handleOnChange, inputValues } = useForm({
    technology: search
  })
  const { technology } = inputValues
  const searching = useSearch( technology, data );

  const handleSubmit = ( e ) => {
    e.preventDefault()
    // navigate(`$search=${ technology }`)
  }
  // debugger
  useEffect(() => {
    scrollTop()
  }, [ ])
  return (
    <section className='container'>
      <div className='section__header'>
        <h2>Technologies</h2>
        <form onSubmit={ handleSubmit }>
          <input type="text" name="technology" value={ technology } onChange={ handleOnChange }/>
        </form>
      </div>
      <div className='cards__wrapper'>
        {
          loading
          ? <h2> Loading... </h2>
          : error 
            ? <h2>{ error_message }</h2>
            : data?.status === 0 || typeof(data) === 'string'
              ? <h2>Error network</h2>
              :
                searching.map(technology => (
                  <TechnologyCard key={ technology.id } technology={ technology }/>
                ))

        } 
      </div>
    </section>
  )
}
