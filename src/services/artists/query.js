import React from 'react'
import axios from 'axios'

export const useArtists = () => {
  const [artists, setArtists] = React.useState([])
  React.useEffect(() => {
    axios({
      method: 'GET',
      url: process.env.REACT_APP_API_URL + '/artists',
    })
      .then(res => {
        setArtists(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  return artists
}

export const useArtist = artistId => {
  const [artist, setArtist] = React.useState([])
  React.useEffect(() => {
    axios({
      method: 'GET',
      url: process.env.REACT_APP_API_URL + artistId.uri,
    })
      .then(res => {
        setArtist(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  return artist
}
