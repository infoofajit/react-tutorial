import { useState, useEffect } from "react"

function withDataFetch (WrappedComponent) {
  return function (props) {
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
      const fetchPosts = async () => {
        try {
          const response = await fetch('https://jsonplaceholder.typicode.com/posts')
          const data = await response.json()
          setData(data)
          setIsLoading(false)
        } catch (error) {
          setError(error)
          setIsLoading(false)
        }
      }
      fetchPosts()
    }, [props])

    return (
      <WrappedComponent
        {...props}
        data={data}
        isLoading={isLoading}
        error={error}
      />
    )
  }
}

export default withDataFetch
