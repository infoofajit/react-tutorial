import React, { useEffect, useState } from 'react'

import Search from '../components/Search'
import UserTable from '../components/UserTable'

const Users = () => {
  const [allUsers, setAllUsers] = useState([])
  const [users, setUsers] = useState([])

  const handleSearch = (ev) => {
    const searchTerm = ev.target.value
    if(!searchTerm) {
      setUsers(allUsers)
      return
    }

    const searchTermCopy = searchTerm.toLowerCase()
    console.log(searchTermCopy)
    const filteredUsers = allUsers.filter(value => {
      return (
        value.id.toString().includes(searchTermCopy) ||
        value.name.toLowerCase().includes(searchTermCopy) ||
        value.username.toLowerCase().includes(searchTermCopy) ||
        value.email.toLowerCase().includes(searchTermCopy)
      )
    })
    setUsers(filteredUsers)
  }

  useEffect(() => {
    function getUsers() {
      fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(res => {
          setAllUsers(res)
          setUsers(res)
        })
    }

    getUsers()
  }, [])

  return (
    <>
      <Search handleSearch={handleSearch} />
      <UserTable users={users} />
    </>
  )
}

export default Users
