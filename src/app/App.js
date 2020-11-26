import { Router } from '@reach/router'
import React from 'react'

const Home = React.lazy(() => import('../pages/Home/Home'))
const Dashboard = React.lazy(() => import('../pages/Dashboard/Dashboard'))
const Account = React.lazy(() => import('../pages/Account/Account'))
const Artist = React.lazy(() => import('../pages/Artist/Artist'))
const Blog = React.lazy(() => import('../pages/Blog/Blog'))
const Cart = React.lazy(() => import('../pages/Cart/Cart'))
const Checkout = React.lazy(() => import('../pages/Checkout/Checkout'))
const Contact = React.lazy(() => import('../pages/Contact/Contact'))
const Login = React.lazy(() => import('../pages/Login/Login'))
const Product = React.lazy(() => import('../pages/Product/Product'))
const Video = React.lazy(() => import('../pages/Video/Video'))

export function App() {
  return (
    <React.Suspense fallback="Loading">
      <Router>
        <Home path="/" />
        <Dashboard path="/dashboard" />
        <Account path="/account" />
        <Artist path="/artists" />
        <Blog path="/blog" />
        <Cart path="/cart" />
        <Checkout path="/checkout" />
        <Contact path="/contact" />
        <Login path="/login" />
        <Product path="/product" />
        <Video path="/videos" />
      </Router>
    </React.Suspense>
  )
}
