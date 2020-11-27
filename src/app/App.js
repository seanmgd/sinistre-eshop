import { Router } from '@reach/router'
import React from 'react'

const Layout = React.lazy(() => import('../layout'))
const Home = React.lazy(() => import('../pages/Home/Home'))
const Dashboard = React.lazy(() => import('../pages/Dashboard/Dashboard'))
const Account = React.lazy(() => import('../pages/Account/Account'))
const Artists = React.lazy(() => import('../pages/Artists/Artists'))
const Artist = React.lazy(() => import('../pages/Artist/Artist'))
const Blog = React.lazy(() => import('../pages/Blog/Blog'))
const Cart = React.lazy(() => import('../pages/Cart/Cart'))
const Checkout = React.lazy(() => import('../pages/Checkout/Checkout'))
const Contact = React.lazy(() => import('../pages/Contact/Contact'))
const Login = React.lazy(() => import('../pages/Login/Login'))
const Products = React.lazy(() => import('../pages/Products/Products'))
const Product = React.lazy(() => import('../pages/Product/Product'))
const Videos = React.lazy(() => import('../pages/Videos/Videos'))
const Video = React.lazy(() => import('../pages/Video/Video'))

export function App() {
  return (
    <React.Suspense fallback="Loading app">
      <Layout>
        <React.Suspense fallback="Loading">
          <Router>
            <Home path="/" />
            <Dashboard path="/dashboard" />
            <Account path="/account" />
            <Artists path="/artists" />
        <Artist path="/artist/:artistSlug" />
            <Blog path="/blog" />
            <Cart path="/cart" />
            <Checkout path="/checkout" />
            <Contact path="/contact" />
            <Login path="/login" />
        <Products path="/products" />
            <Product path="/product/:productSlug" />
        <Videos path="/videos" />
            <Video path="/video/:videoSlug" />
          </Router>
        </React.Suspense>
      </Layout>
    </React.Suspense>
  )
}
