import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { addCivilization } from '../../actions/actionsCivilization';
import { addUnit } from '../../actions/actionsUnits';
import { icons } from '../../data/icons'

export const UnitCard = ({ unit }) => {
  const { name, expansion, description, age, cost,  build_time,  reload_time,
    attack_delay,
    movement_rate,
    line_of_sight,
    hit_points,
    range,
    attack,
    armor,
    accuracy, id } = unit
    const { Gold:gold, Wood:wood, info, Cost, Provides } = cost
    const { Food } = typeof(Provides) === 'object' && Provides
    const { expansion_icon, castle_icon, food_icon, age_icon, bonus_icon, like_icon, next_icon, gold_icon, wood_icon } = icons;

    // debugger
  const dispatch = useDispatch()
  // debugger
  const handleAddUnit = () => {
    dispatch( addUnit(unit) )
  }
  // debugger
  useEffect(() => {
    if(typeof(Provides) === 'object') {

    console.log( id + Provides )
    } 
  }, [ unit ])
  return (
    <article className='card'>
        <h3>Civilization: <span>{ name }</span></h3>
      <div className='card__info'>
        <p>Description: <span>{ description }</span></p>
      </div>
      <div className='card__info'>
        <p>Expansion: <span>{ expansion }</span></p>
          {expansion_icon }
          {expansion_icon }
      </div>
      <div className='card__info config'>
        <p>Age: <span>{ age }</span></p>
          {castle_icon }
          {castle_icon }
      </div>
      <h2>{ info ? 'No Cost' : 'Cost:' }</h2>
      {
        info !== undefined && 
        <div className='card__info config'>
          <p><span>{ info }</span></p>
        </div>
      }
      {
        Cost !== undefined && 
        <div className='card__info config'>
          <p>{ Cost }</p>
        </div>
      }
      {
        Food !== undefined && 
        <div className='card__info config'>
          <p>Provides food: <span>{ Food }</span></p>
            {food_icon }
            {food_icon }
        </div>
      }
      {
        gold && 
        <div className='card__info config'>
          <p>Gold: <span>{ gold }</span></p>
            {gold_icon }
            {gold_icon }
        </div>
      }
      {
        wood && 
        <div className='card__info config'>
          <p>Wood: <span>{ wood }</span></p>
            {wood_icon }
            {wood_icon }
        </div>
      }

      <div className='card__expand'>
        <span onClick={ handleAddUnit }>{ like_icon }</span>
        <span >{ next_icon }</span>
        {/* <canvas className='glass'></canvas> */}
      </div>
      <canvas className='glass--background'></canvas>
      <canvas className='glass--background--2'></canvas>
    </article>
  )
}
