import React from 'react'

const InputComponet = ({type, isHover}) => {
  return (
    <input
      type={type}
      style={{backgroundColor: isHover ? 'blue' : 'white'}}
    />
  )
}

export default InputComponet
