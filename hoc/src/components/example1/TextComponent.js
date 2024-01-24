const TextComponent = ({text, isHover}) => {
  return (
    <div style={{ backgroundColor: isHover ? 'blue' : 'white' }}>
      {text}
    </div>
  )
}

export default TextComponent
