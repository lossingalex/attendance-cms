import React from 'react'

const AddGinnah = props => {
  console.log('Props from AddGinnah', props)
  return (
    <div>
      <form onSubmit={props.submitTaoChange} className='AddGinnah-form'>
        <label>
          <p>
            <b>Name:</b>
          </p>
          <input
            name='name'
            value={props.name}
            type='text'
            onChange={props.onChange}
          />
        </label>
        <br />
        <label>
          <p>
            <b>School:</b>
          </p>
          <input
            name='role'
            value={props.role}
            type='text'
            onChange={props.onChange}
          />
        </label>
        <br />
        <button type='submit' value='Submit'>
          Send
        </button>
      </form>
    </div>
  )
}

export default AddGinnah
