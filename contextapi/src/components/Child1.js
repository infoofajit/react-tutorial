import { useContext } from "react"
import { ThemeContext } from "../context/ThemeContext"

const Child1 = () => {
  const {theme} = useContext(ThemeContext)

  return <div>{theme}</div>
}

export default Child1
