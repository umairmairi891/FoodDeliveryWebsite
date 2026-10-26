import React from 'react'

function Input({pholder, style, ...props}) {
  return (
    <input className={`px-4 py-2 ${style} `} placeholder={pholder}/>
  )
}


export default Input