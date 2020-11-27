import React from 'react'
import axios from 'axios'

export const useProducts = () => {
  const [products, setProducts] = React.useState([])
  React.useEffect(() => {
    axios({
      method: 'GET',
      url: process.env.REACT_APP_API_URL + '/products',
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

export const useProduct = productId => {
  const [product, setProduct] = React.useState([])
  React.useEffect(() => {
    axios({
      method: 'GET',
      url: `${process.env.REACT_APP_API_URL}/product/${productId}`,
    })
      .then(res => {
        setProduct(res.data)
        console.log(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }, [productId])

  return product
}
