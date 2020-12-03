import React from 'react'
import axios from 'axios'

export const useArtists = () => {
  const [artists, setArtists] = React.useState([])
  const [isOffline, setIfOffline] = React.useState(false)
  const [isLoader, setIsLoader] = React.useState(true)
  React.useEffect(() => {
    axios({
      method: 'GET',
      url: process.env.REACT_APP_API_URL + '/artists',
    })
      .then(res => {
        setArtists(res.data)
        setIsLoader(false)
      })
      .catch(err => {
        setIsLoader(false)
        setIfOffline(true)
        console.log(err)
      })
  }, [])

  return { artists, isOffline, isLoader }
}

export const useArtist = artistId => {
  const [artist, setArtist] = React.useState([])
  const [isOffline, setIfOffline] = React.useState(false)
  const [isLoader, setIsLoader] = React.useState(true)
  React.useEffect(() => {
    axios({
      method: 'GET',
      url: `${process.env.REACT_APP_API_URL}/artist/${artistId}`,
    })
      .then(res => {
        setArtist(res.data)
        setIsLoader(false)
      })
      .catch(err => {
        setIsLoader(false)
        setIfOffline(true)
        console.log(err)
      })
  }, [artistId])

  return { artist, isOffline, isLoader }
}
