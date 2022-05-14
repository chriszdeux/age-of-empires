import React from 'react'
import { icons } from '../../data/icons'

export const CivilizationCard = ({ civilization }) => {
  const { name, expansion, army_type, unique_unit, unique_tech,  team_bonus, civilization_bonus  } = civilization
  const { expansion_icon, castle_icon,  bonus_icon} = icons
  return (
    <article className='card'>
      <h2>{ name }</h2>
      <p>{ expansion_icon } { expansion }</p>
      <p>{ castle_icon } { army_type }</p>
      <p>{ bonus_icon } { team_bonus }</p>
      <ul>
        {
          civilization_bonus.map(bonus => (
            <li key={ bonus }>{ bonus }</li>
          ))
        }
      </ul>
    </article>
  )
}
