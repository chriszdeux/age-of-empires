import React from 'react'
import { icons } from '../../data/icons'
import { useCivilizations } from '../../hooks/useCivilizations'
import { RegularCard } from './RegularCard'

export const ListRegularCards = () => {
  const { data, loading, error, error_message } = useCivilizations()
  const { castle_icon, expansion_icon } = icons
  return (
    <div className='regular__card__wrapper'>
      {
        !loading && 
        data.map(item => (
          <RegularCard values={{ item, castle_icon, expansion_icon }}/>
        ))
      }
    </div>
  )
}
