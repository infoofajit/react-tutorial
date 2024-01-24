function withBorder(WrappedComponent) {
  return function(props) {
    return (
      <div style={{border: '1px solid red'}}>
        <WrappedComponent {...props} />
      </div>
    )
  }
}

export default withBorder