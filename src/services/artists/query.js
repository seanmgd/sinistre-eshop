import React from 'react'
import axios from 'axios'
import { api_url } from '../../constants/api'

export const UseArtists = () => {
  const [artists, setArtists] = React.useState([])
  React.useEffect(() => {
    axios({
      method: 'GET',
      url: api_url + '/artists',
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

export const UseArtist = artistId => {
  const [artist, setArtist] = React.useState([])
  React.useEffect(() => {
    axios({
      method: 'GET',
      url: api_url + artistId.uri,
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
