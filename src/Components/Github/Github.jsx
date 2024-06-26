import React, { useEffect, useState } from 'react'
import {useLoaderData} from 'react-router-dom'
function Github() {

    const data = useLoaderData()
//     const [data, setData] = useState([])

// useEffect(() => {
//   fetch('https://api.github.com/users/adarshsinggh').
//   then(response => response.json()).
//   then(data => {
    
//     setData(data);
//   })
// }, [])


  return (
    <div className=' bg-gray-600'>
    <div className='text-center m-4 text-white p-4 text-3xl'>Github Followers : {data.followers}<br/> Public  Repo : {data.public_repos}
    <img src= {data.avatar_url} width={300} alt='Github Avatar'/>
    </div>
    {/* <div className='text-center m-4 text-white p-4 text-3xl'>Public  Repo : {data.public_repos}</div> */}
    
    </div>
  )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/adarshsinggh')
    return response.json()
}