import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { useSearch } from '../../hooks/useSearch';
import { StructureCard } from './StructureCard';
import queryString from 'query-string';
import { scrollTop } from '../../data/scrollTop';
export const Structures = () => {
  const storedStructures = useSelector(state => state.store_structures_reducer)
  const { loading, error, data, error_message } = storedStructures;
  // debugger
  const navigate = useNavigate();
  const location = useLocation();
  const query = queryString.parse(location.search);
  const { search } = query
  const { handleOnChange, inputValues } = useForm({
    structure: search
  })
  const { structure } = inputValues
  const searching = useSearch( structure, data );

  const handleSubmit = ( e ) => {
    e.preventDefault()
    // navigate(`$search=${ structure }`)
  }

  useEffect(() => {
    scrollTop()
  }, [ ])
  return (
    <section className='container'>
      <div className='section__header'>
        <h2>Structures</h2>
        <form onSubmit={ handleSubmit }>
          <input type="text" name="structure" value={ structure } onChange={ handleOnChange }/>
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
                searching.map(structure => (
                  <StructureCard key={ structure.id } structure={ structure }/>
                ))

        } 
      </div>
    </section>
  )
}
