import React, { useEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux';
import { addStructure, removeStructure } from '../../actions/actionsStructures';
import { animations } from '../../data/animations';
import { icons } from '../../data/icons';
import { useIntersectionObserver } from '../../hooks/useIntersection';

export const StructureCard = ({ structure }) => {
  const { age, armor, build_time, cost, expansion, hit_points, line_of_sight, name, special, like } = structure
  const { Wood, Gold, Stone } = cost
  // debugger
  const { expansion_icon, time_icon,  wood_icon, like_icon, next_icon, armor_icon, age_icon, hit_icon, range_icon, gold_icon, stone_icon, castle_icon, close_icon } = icons;
  const [handleLike, setHandleLike] = useState(false)

  const dispatch = useDispatch()
  
  const handleAddStructure = () => {
    dispatch( addStructure(structure) )
    setHandleLike(!handleLike)
  }
  const handleRemoveStructure = () => {
    dispatch( removeStructure(name) )
    setHandleLike(!handleLike)
  }
  const refCard = useRef(null)
    const isVisible = useIntersectionObserver(refCard)
    const { fade_in } = animations
// debugger


  useEffect(() => {
    if(like) {
      setHandleLike(like)
    }
  }, [ structure ])

  return (
    <article className={`card ${ isVisible ? fade_in : '' }`} ref={ refCard }>
        <h3>Structure: <span>{ name }</span></h3>
      <div className='card__info'>
        <p>Expansion: <span>{ expansion }</span></p>
          { expansion_icon }
          { expansion_icon }
      </div>
      <div className='card__info'>
        <p>Age: <span>{ age }</span></p>
          { castle_icon }
          { castle_icon }
      </div>
      <h2>Cost: </h2>
      {
        Wood && 
        <div className='card__info config'>
        <p>Wood: <span>{ Wood }</span></p>
          { wood_icon }
          { wood_icon }
      </div>
      }
      {
        Gold && 
        <div className='card__info config'>
        <p>Gold: <span>{ Gold }</span></p>
          { gold_icon }
          { gold_icon }
      </div>
      }
      {
        Stone && 
        <div className='card__info config'>
        <p>Stone: <span>{ Stone }</span></p>
          { stone_icon }
          { stone_icon }
      </div>
      }
      <div className='card__info config'>
        <p>Build Time: <span>{ build_time }seg</span></p>
          { time_icon }
          { time_icon }
      </div>
      <div className='card__info config'>
        <p>Hit Points: <span>{ hit_points }</span></p>
          { hit_icon }
          { hit_icon }
      </div>
      <div className='card__info config'>
        <p>Line of Sight: <span>{ line_of_sight }</span></p>
          {range_icon }
          {range_icon }
      </div>
      <div className='card__info config'>
        <p>Armor: <span>{ armor }</span></p>
          {armor_icon }
          {armor_icon }
      </div>

      { special && <h3>Special:</h3> }
      <ul className='bonus__list'>
        {
          special && special.map(special => (
            <li key={ special }>{ special }</li>
          ))
        }
      </ul>

      <div className='card__expand'>
      <span onClick={ !handleLike ? handleAddStructure : handleRemoveStructure }>{ !handleLike ? like_icon : close_icon}</span>
        {/* <span >{ next_icon }</span> */}
        {/* <canvas className='glass'></canvas> */}
      </div>
      <canvas className='glass--background'></canvas>
      <canvas className='glass--background--2'></canvas>
    </article>
  )
}
