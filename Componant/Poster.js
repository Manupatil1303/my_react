import React from 'react'

function Poster(props) {
  return (
    <div className='Poster'>
    
    <img src={props.img} alt="" />
    <p> {props.title}</p>
    <p>Year:{props.year}</p>
    
    </div>
  )
}

export default Poster