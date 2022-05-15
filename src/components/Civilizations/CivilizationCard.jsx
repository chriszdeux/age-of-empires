import React, { useEffect, useRef } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { actionHandleData } from '../../actions/actionHandleData';
import { addCivilization } from '../../actions/actionsCivilization';
import { animations } from '../../data/animations';
import { icons } from '../../data/icons'
import { useIntersectionObserver } from '../../hooks/useIntersection';
import { useRandomColor } from '../../hooks/useRandomColor';

export const CivilizationCard = ({ civilization }) => {
  const { name, expansion, army_type, unique_unit, unique_tech,  team_bonus, civilization_bonus  } = civilization
  const { expansion_icon, castle_icon,  bonus_icon, like_icon, next_icon } = icons;
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleAddCivilization = () => {
    dispatch( addCivilization(civilization) )
  }

  const { colorBorder, handleRandomColor } = useRandomColor(name)
  // debugger
  useEffect(() => {
    handleRandomColor()
  }, [name])
  const refCard = useRef(null)
  const isVisible = useIntersectionObserver(refCard)
  const { fade_in } = animations

  const handleFullInformation = () => {
    dispatch(actionHandleData(civilization))
    navigate(`/age-of-empires/civilization/${name}`)
  }

  return (
    <article ref={ refCard } className={`card ${ isVisible ? fade_in : '' }`} >
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
      <div className='bonus__list'>
        <h3>Bonus</h3>
        <ul >
          {
            civilization_bonus.map(bonus => (
              <li key={ bonus }>{ bonus }</li>
            ))
          }
        </ul>
      </div>

      <div className='card__expand'>
        <span onClick={ handleAddCivilization }>{ like_icon }</span>
        <span onClick={ handleFullInformation }>{ next_icon }</span>
        {/* <canvas className='glass'></canvas> */}
      </div>
      <canvas className='glass--background'></canvas>
      <canvas className='glass--background--2'></canvas>
    </article>
  )
}
