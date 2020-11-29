import { Navbar } from '../Navbar'
import { LayoutWrapper } from './Layout.style'
import { CookiesBanner } from '../CookiesBanner'

export default function Layout({ children }) {
  return (
    <LayoutWrapper>
      <Navbar />
      {children}
      <CookiesBanner />
    </LayoutWrapper>
  )
}
