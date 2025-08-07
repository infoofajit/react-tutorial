function withToggle(PassedComponent) {
  return function(props) {
    return (
      <PassedComponent {...props} />
    )
  }
}

export default withToggle