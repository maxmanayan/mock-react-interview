import axios from 'axios'
import React, { useEffect, useState } from 'react'
import UserAndPic from './UserAndPic'

const APICaller = () => {
  const [ data, setData ] = useState(null)

  useEffect(() => {
    getData()
  }, [])

  const getData = async () => {
    try {
      let res = await axios.get('https://randomuser.me/api')
      setData(res.data.results)
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
    </>

  )
}

export default APICaller