import React from 'react'

function post(props) {
  return (
    <div className='post'>
        <h1>{props.title}</h1>
        <hr/>
        <p> {props.content}</p>
    </div>
  )
}

export default post