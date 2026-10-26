import React from 'react'

function Button({click,label, style,...props}) {
  return (
    <button onClick={click} className={`cursor-pointer px-5 py-2 ${style}`}>{label}</button>
  )
}

export default Button