import React, { useState } from 'react'
// impo

const Example3 = () => {
  const [toggle, setToggle] = useState(true)
  const [text, setText] = useState('Hello')

  return (
    <div>
      {toggle ? (
        <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
      ) : (
        <span>{text}</span>
      )}
      <br />
      <button onClick={() => setToggle(!toggle)}>Toggle</button>
    </div>
  )
}

export default Example3
