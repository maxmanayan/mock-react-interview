import axios from 'axios'
import React, { useEffect, useState } from 'react'

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

  return(
    <>
      <h1>APICaller</h1>
      {data && <span>{JSON.stringify(data, null, 2)}</span>}
    </>

  )
}

export default APICaller