import { Router } from '@reach/router'
import React from 'react'

const Home = React.lazy(() => import('../pages/Home/Home'))
const Dashboard = React.lazy(() => import('../pages/Dashboard/Dashboard'))

export function App() {
  return (
    <React.Suspense fallback="Loading">
      <Router>
        <Home path="/" />
        <Dashboard path="/dashboard" />
      </Router>
    </React.Suspense>
  )
}
