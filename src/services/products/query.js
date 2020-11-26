import React from 'react'
import axios from 'axios'
import { api_url } from '../../const/api'

export const UseProducts = () => {
  const [products, setProducts] = React.useState([])
  React.useEffect(() => {
    axios({
      method: 'GET',
      url: api_url + '/products',
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

export const UseProduct = productId => {
  const [product, setProduct] = React.useState([])
  React.useEffect(() => {
    axios({
      method: 'GET',
      url: api_url + productId.uri,
    })
      .then(res => {
        setProduct(res.data)
        console.log(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  return product
}
