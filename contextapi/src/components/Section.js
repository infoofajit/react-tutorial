import { LevelContext } from "../context/LevelContext"

const Section = ({level, children}) => {
  return (
    <div style={{padding: '5px', border: '1px solid'}}>
      <LevelContext.Provider value={level}>
        {children}
      </LevelContext.Provider>
    </div>
  )
}

export default Section
