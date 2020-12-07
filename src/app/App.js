import { Router } from '@reach/router'
import React from 'react'
import { useUserContext } from '../contexts/user'
import styled from 'styled-components'
import {
  askPermission,
  initializedFirebaseApp,
} from '../services/firebase/init-fcm'

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
const Logout = React.lazy(() => import('../pages/Logout/Logout'))

const PageWrapper = styled.div`
  width: 100vw;
`

initializedFirebaseApp()
askPermission().then(r => {
  console.log(r, ' is token')
  localStorage.setItem('notification-token', r)
})
export function App() {
  const { user } = useUserContext()
  const isAuth = user.token

  return (
    <React.Suspense fallback="Loading app">
      <Layout>
        <React.Suspense fallback="Loading">
          <PageWrapper>
            <Router>
              {isAuth && (
                <>
                  <Account path="/account" />
                  <Cart path="/cart" />
                  <Checkout path="/checkout" />
                  <Logout path="/logout" />
                </>
              )}
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
          </PageWrapper>
        </React.Suspense>
      </Layout>
    </React.Suspense>
  )
}
