import React from 'react'
import axios from 'axios'
import { api_url } from '../../const/api'

export const UseProducts = () => {
  const [products, setProducts] = React.useState([])
  React.useEffect(() => {
    axios({
      method: 'GET',
      url: api_url + 'products',
    })
      .then(res => {
        setProducts(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  return products
}
