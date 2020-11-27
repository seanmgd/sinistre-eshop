import { Router } from '@reach/router'
import React from 'react'
import { useUserContext } from '../contexts/user'

const Layout = React.lazy(() => import('../layout'))
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
const Logout = React.lazy(() => import('../pages/Logout/Logout'))

export function App() {
  const { user } = useUserContext()
  const isAuth = user.token
  return (
    <React.Suspense fallback="Loading app">
      <Layout>
        <React.Suspense fallback="Loading">
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
            <Artist path="/artists" />
            <Blog path="/blog" />
            <Product path="/product" />
            <Video path="/videos" />
            <Contact path="/contact" />
            <Login path="/login" />
          </Router>
        </React.Suspense>
      </Layout>
    </React.Suspense>
  )
}
