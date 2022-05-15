import React, { useEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { actionHandleData } from '../../actions/actionHandleData';
import { addCivilization } from '../../actions/actionsCivilization';
import { addUnit, removeUnit } from '../../actions/actionsUnits';
import { animations } from '../../data/animations';
import { icons } from '../../data/icons'
import { useIntersectionObserver } from '../../hooks/useIntersection';

export const UnitCard = ({ unit }) => {
  const { name, expansion, description, age, cost,  build_time,  reload_time,
    movement_rate,
    line_of_sight,
    hit_points,
    attack,
    armor, id, attack_bonus, like } = unit
    const { Gold:gold, Wood:wood, info, Cost, Provides } = cost
    const { Food } = typeof(Provides) === 'object' && Provides
    const { expansion_icon, castle_icon, food_icon, age_icon, bonus_icon, like_icon, next_icon, gold_icon, wood_icon, time_icon, reload_icon,move_icon,
    hit_icon,
    attack_icon,
    range_icon,
    armor_icon, build_icon, close_icon} = icons;
    const [handleLike, setHandleLike] = useState(false)

    // debugger
    const dispatch = useDispatch();
    const navigate = useNavigate()
    // debugger
    const handleAddUnit = () => {
      dispatch( addUnit(unit) )
      setHandleLike(!handleLike)
    }
    const handleRemoveUnit = () => {
      dispatch( removeUnit(name) )
      setHandleLike(!handleLike)
    }

    const handleFullInformation = () => {
      dispatch(actionHandleData(unit))
      navigate(`/age-of-empires/unit/${name}`)
    }
    
    const refCard = useRef(null)
    const isVisible = useIntersectionObserver(refCard)
    const { fade_in } = animations

    useEffect(() => {
      if(like) {
        setHandleLike(like)
      }
    }, [ unit])

    return (
    <article className={`card ${ isVisible ? fade_in : '' }`} ref={ refCard }>
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
      <h3>{ info ? 'No Cost' : 'Cost:' }</h3>
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
      <div className='unit__stats'>
        <div className='card__info '>
          <p>Build Time: <span>{ build_time }</span></p>
            {build_icon }
            {build_icon }
        </div>

        
        <div className='card__info '>
          <p>Reload Time: <span>{ reload_time }</span></p>
            {reload_icon }
            {reload_icon }
        </div>

        <div className='card__info '>
          <p>Movement Rate: <span>{ movement_rate }</span></p>
            {move_icon }
            {move_icon }
        </div>
        <div className='card__info '>
          <p>Line of Sight: <span>{ line_of_sight }</span></p>
            {range_icon }
            {range_icon }
        </div>

        <div className='card__info '>
          <p>Hit Points: <span>{ hit_points }</span></p>
            {hit_icon }
            {hit_icon }
        </div>
        <div className='card__info '>
          <p>Attack: <span>{ attack }</span></p>
            {attack_icon }
            {attack_icon }
        </div>
        <div className='card__info '>
          <p>Amor: <span>{ armor }</span></p>
            {armor_icon }
            {armor_icon }
        </div>

        <h3>Attack Bonus:</h3>
        <div className='card__info'>
          <ul>
            {
              attack_bonus?.length > 0 &&
              attack_bonus?.map(bonus => (
                <li key={ bonus }>{ bonus }</li>
              ))
            }
          </ul>
        </div>
      </div>
      <div className='card__expand'>
      <span onClick={ !handleLike ? handleAddUnit : handleRemoveUnit }>{ !handleLike ? like_icon : close_icon}</span>
        <span onClick={ handleFullInformation }>{ next_icon }</span>
        {/* <canvas className='glass'></canvas> */}
      </div>
      <canvas className='glass--background'></canvas>
      <canvas className='glass--background--2'></canvas>
    </article>
  )
}
