import React from 'react'
import Form from '../components/Form'

function LOGIN() {
  return (
    <div className='h-dvh bg-cyan-950 flex items-center justify-center'> 
    <Form route="/api/token/" method="login"/>
    </div>
  )
}

export default LOGIN