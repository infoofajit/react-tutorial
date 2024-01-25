import {useState, useEffect} from 'react'

const useFetch = (url) => {
  const [data, setData] = useState([])

  useEffect(() => {
    // async function fetchTodo() {
    //   const response = await fetch(url)
    //   const json = await response.json()
    //   setData(json)
    // }
    function fetchTodo() {
      fetch(url)
        .then(response => response.json())
        .then(data => setData(data))
    }

    fetchTodo()
  }, [url])

  return [data]
}

export default useFetch
