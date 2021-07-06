import axios from 'axios'
import React, { useEffect, useState } from 'react'
import UserAndPic from './UserAndPic'

const APICaller = () => {
  const [ data, setData ] = useState([])

  useEffect(() => {
    getData()
  }, [])

  const getData = async () => {
    try {
      let res = await axios.get('https://randomuser.me/api')
      setData([...data, res.data.results[0]])
    } catch (error) {
      console.log(error)
    }
  }

  const getUser = (users) => {
    return users.map(user => {
      return <UserAndPic key={user.email} user={`${user.name.first} ${user.name.last}`} image={user.picture.thumbnail} />
    })
  }

  return(
    <>
      <h1>APICaller</h1>
      {data && <span>{JSON.stringify(data, null, 2)}</span>}
      {data && getUser(data)}
      <button onClick={getData}>Get More Users</button>
    </>

  )
}

export default APICaller