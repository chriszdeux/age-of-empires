import React from 'react'

export const RegularCard = ({ values }) => {
  const { item, castle_icon, expansion_icon } = values
  const { name, expansion } = item
  return (
    <div className='regular__card'>
      <h2> { castle_icon } { name }</h2>
      <p>{ expansion_icon } { expansion }</p>
    </div>
  )
}
