import React, { useEffect, useState } from 'react'
import { icons } from '../../data/icons';
import { useSelector } from 'react-redux'
import { useFindData } from '../../hooks/useFindData';
import { StructureCard } from '../Structures/StructureCard';
import { UnitCard } from './UnitCard';

export const UnitFullView = () => {

  const unit = useSelector(state => state.handle_data_reducer)
  const { created_in } = unit;
  const { data } = useSelector( state => state.store_structures_reducer )
  const [structureSelected, setStructureSelected] = useState('');
  const structure = useFindData(structureSelected, data);

  useEffect(() => {
    if(created_in.length > 0) {
      const split = created_in?.split('/')
      // debugger
      setStructureSelected(split[split.length - 1])
    }
  }, [ created_in ])
  // debugger
  return (
    <section className='container full__view'>
      <h2>Full view</h2>
        <div className='cards__wrapper'>
          <div className='card__container'>
            <h2>Unit</h2>
            <UnitCard unit={unit}/>
          </div>
          
          { icons.next_icon }
          <div className='card__container'>
            <h2>{ Object.keys( structure ).length > 0 ? 'Create In ' : 'Not Info' }</h2>
            {
              Object.keys(structure).length > 0 &&
              <>
              <StructureCard structure={ structure }/>
              </>
            }
          </div>       
      </div>
    </section>
  )
}
