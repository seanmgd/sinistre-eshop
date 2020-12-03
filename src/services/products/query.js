import React from 'react'
import axios from 'axios'

export const useProducts = () => {
  const [products, setProducts] = React.useState([])
  const [isOffline, setIfOffline] = React.useState(false)
  const [isLoader, setIsLoader] = React.useState(true)
  React.useEffect(() => {
    axios({
      method: 'GET',
      url: process.env.REACT_APP_API_URL + '/products',
    })
      .then(res => {
        setProducts(res.data)
        setIsLoader(false)
      })
      .catch(err => {
        setIsLoader(false)
        setIfOffline(true)
        console.log(err)
      })
  }, [])

  return { products, isOffline, isLoader }
}

export const useProduct = productId => {
  const [product, setProduct] = React.useState([])
  const [isOffline, setIfOffline] = React.useState(false)
  const [isLoader, setIsLoader] = React.useState(true)
  React.useEffect(() => {
    axios({
      method: 'GET',
      url: `${process.env.REACT_APP_API_URL}/product/${productId}`,
    })
      .then(res => {
        setProduct(res.data)
        setIsLoader(false)
      })
      .catch(err => {
        setIsLoader(false)
        setIfOffline(true)
        console.log(err)
      })
  }, [productId])

  return { product, isOffline, isLoader }
}
