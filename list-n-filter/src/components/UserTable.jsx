import React from 'react'

const UserTable = ({users}) => {
  console.log('UserTable')
  return (
    <table className='table-auto'>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Username</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        {users.map(item => {
          return <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.username}</td>
            <td>{item.email}</td>
          </tr>
        })}
      </tbody>
    </table>
  )
}

export default UserTable
