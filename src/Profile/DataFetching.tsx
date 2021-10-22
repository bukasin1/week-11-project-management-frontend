import React, {useEffect, useState} from 'react'
import axios from 'axios'

export default function DataFetching() {
const [name, setName] = useState([])


useEffect(() => {
  axios.get('jaraaa.herokuapp.com')
  .then(res=> {
    console.log(res)
  })
  .catch(err => {
    console.log(err)
  })
})

  return (
    <div>

    </div>
  )
}
