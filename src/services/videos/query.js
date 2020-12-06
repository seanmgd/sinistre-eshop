import React from 'react'
import axios from 'axios'

export const useVideos = () => {
  const [videos, setVideos] = React.useState([])
  const [isOffline, setIsOffline] = React.useState(false)
  const [isLoader, setIsLoader] = React.useState(true)
  React.useEffect(() => {
    axios({
      method: 'GET',
      url: process.env.REACT_APP_API_URL + '/videos',
    })
      .then(res => {
        setVideos(res.data)
        setIsLoader(false)
      })
      .catch(() => {
        setIsLoader(false)
        setIsOffline(true)
      })
  }, [])

  return { videos, isOffline, isLoader }
}

export const useVideo = videoId => {
  const [video, setVideo] = React.useState([])
  const [isOffline, setIsOffline] = React.useState(false)
  const [isLoader, setIsLoader] = React.useState(true)
  React.useEffect(() => {
    axios({
      method: 'GET',
      url: `${process.env.REACT_APP_API_URL}/video/${videoId}`,
    })
      .then(res => {
        setVideo(res.data)
        setIsLoader(false)
      })
      .catch(() => {
        setIsLoader(false)
        setIsOffline(true)
      })
  }, [videoId])

  return { video, isOffline, isLoader }
}
