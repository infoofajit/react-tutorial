import { useState } from "react"

function withHover(WrappedComponent) {
  return function(props) {
    const [isHover, setIsHover] = useState(false)

    function handleOnHoverEnter () {
      setIsHover(true)
    }

    function handleOnHoverLeave () {
      setIsHover(false)
    }

    return (
      <div onMouseEnter={handleOnHoverEnter} onMouseLeave={handleOnHoverLeave}>
        <WrappedComponent {...props} isHover={isHover} />
      </div>
    )
  }
}

export default withHover