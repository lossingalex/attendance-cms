import React from 'react'

const Kakia = props => {
  // console.log('from kakia.js', props.kakia)
  // console.log('index from kakia.js', props.index)
  return (
    <div>
      <p>Hello {props.kakia.name}, You are from {props.kakia.school}.</p>
      <button onClick={props.onEdit}>Edit Kakia</button>
      <button onClick={props.onDelete}>Delete Kakia</button>
    </div>
  )
}

export default Kakia
