import React from 'react'
import { useDispatch } from 'react-redux';
import { addCivilization } from '../../actions/actionsCivilization';
import { icons } from '../../data/icons'

export const CivilizationCard = ({ civilization }) => {
  const { name, expansion, army_type, unique_unit, unique_tech,  team_bonus, civilization_bonus  } = civilization
  const { expansion_icon, castle_icon,  bonus_icon, like_icon, next_icon } = icons;
  const dispatch = useDispatch()
  const handleAddCivilization = () => {
    dispatch( addCivilization(civilization) )
  }
  return (
    <article className='card'>
        <h3>Civilization: <span>{ name }</span></h3>
      <div className='card__info'>
        <p>Expansion: <span>{ expansion }</span></p>
          { expansion_icon }
          { expansion_icon }
      </div>
      <div className='card__info'>
        <p>Army Type: <span>{ army_type }</span></p>
          {castle_icon }
          {castle_icon }
      </div>
      <div className='card__info config'>
        <p>Team Bonus: <span>{ team_bonus }</span></p>
          {bonus_icon }
          {bonus_icon }
      </div>

      <ul className='bonus__list'>
        {
          civilization_bonus.map(bonus => (
            <li key={ bonus }>{ bonus }</li>
          ))
        }
      </ul>

      <div className='card__expand'>
        <span onClick={ handleAddCivilization }>{ like_icon }</span>
        <span >{ next_icon }</span>
        {/* <canvas className='glass'></canvas> */}
      </div>
      <canvas className='glass--background'></canvas>
      <canvas className='glass--background--2'></canvas>
    </article>
  )
}
