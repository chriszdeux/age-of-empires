import React, { useEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { actionHandleData } from '../../actions/actionHandleData'
import { addTechnology, delTechnology } from '../../actions/actionTechnologies'
import { animations } from '../../data/animations'
import { icons } from '../../data/icons'
import { useIntersectionObserver } from '../../hooks/useIntersection'

export const TechnologyCard = ({ technology }) => {
  const {
    name,
    description,
    expansion,
    age,
    develops_in,
    cost,
    build_time,
    applies_to,
    like
  } = technology

  const { Food, Gold, Wood } = cost
  const { expansion_icon, age_icon, wood_icon, gold_icon, food_icon, time_icon, like_icon, next_icon, castle_icon, close_icon } = icons
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [handleLike, setHandleLike] = useState(false)
  const handleAddTechnology = () => {
    dispatch(addTechnology(technology))
    setHandleLike(!handleLike)
  }
  const handleRemoveTechnology = () => {
    dispatch(delTechnology(name))
    setHandleLike(!handleLike)
  }
  const refCard = useRef(null)
  const isVisible = useIntersectionObserver(refCard)
  const { fade_in } = animations


  const handleFullInformation = () => {
    dispatch(actionHandleData(technology))
    navigate(`/age-of-empires/technology/${name}`)
  }

  useEffect(() => {
    if(like) {
      setHandleLike(like)
    }
  }, [ technology])
  return (
    <article className={`card ${ isVisible ? fade_in : '' }`} ref={ refCard}>
        <h3>Name: <span>{ name }</span></h3>
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
      {
        Food  && 
        <div className='card__info config'>
          <p>Provides food: <span>{ Food }</span></p>
            {food_icon }
            {food_icon }
        </div>
      }
      {
        Gold && 
        <div className='card__info config'>
          <p>Gold: <span>{ Gold }</span></p>
            {gold_icon }
            {gold_icon }
        </div>
      }
      {
        Wood && 
        <div className='card__info config'>
          <p>Wood: <span>{ Wood }</span></p>
            {wood_icon }
            {wood_icon }
        </div>
      }
      <div className='card__info config'>
        <p>Build Time: <span>{ build_time }seg</span></p>
          { time_icon }
          { time_icon }
      </div>
      <div className='card__expand'>
      <span onClick={ !handleLike ? handleAddTechnology : handleRemoveTechnology }>{ !handleLike ? like_icon : close_icon}</span>
        <span onClick={ handleFullInformation }>{ next_icon }</span>
        {/* <canvas className='glass'></canvas> */}
      </div>
      <canvas className='glass--background'></canvas>
      <canvas className='glass--background--2'></canvas>
    </article>
  )
}
