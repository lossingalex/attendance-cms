import React from 'react'

const Ginnah = props => {
  console.log('props from Ginnah.js', props.index)
  return (
    <div className='Ginnah-Display'>
      <article>
        <h4>Student's Name: {props.ginnah.name}</h4>
      </article>
      <article>
        <p><b>Student's School: </b>{props.ginnah.school}</p>
      </article>
      <article>
        <h4>Student's Description: </h4>
        <p>
          {props.ginnah.description}.
        </p>
      </article>
      <button onClick={props.onEdit}>Edit Ginnah</button>
      <button onClick={props.onDelete}>Delete Ginnah</button>
    </div>
  )
}

export default Ginnah
