import React from 'react'
import axios from 'axios'
import { api_url } from '../../const/api'

export const UseVideos = () => {
  const [videos, setVideos] = React.useState([])
  React.useEffect(() => {
    axios({
      method: 'GET',
      url: api_url + 'videos',
    })
      .then(res => {
        setVideos(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  return videos
}
