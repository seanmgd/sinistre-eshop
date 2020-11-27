import React from 'react'
import axios from 'axios'

export const useVideos = () => {
  const [videos, setVideos] = React.useState([])
  React.useEffect(() => {
    axios({
      method: 'GET',
      url: process.env.REACT_APP_API_URL + '/videos',
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

export const useVideo = videoId => {
  const [video, setVideo] = React.useState([])
  React.useEffect(() => {
    axios({
      method: 'GET',
      url: process.env.REACT_APP_API_URL + videoId.uri,
    })
      .then(res => {
        setVideo(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  return video
}
