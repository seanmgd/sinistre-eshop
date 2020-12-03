import { Navbar } from '../Navbar'
import { ChildrenWrapper, LayoutWrapper } from './Layout.style'
import { Footer } from '../Footer'
import { CookiesBanner } from '../CookiesBanner'

export default function Layout({ children }) {
  return (
    <LayoutWrapper>
      <Navbar />
      <ChildrenWrapper>{children}</ChildrenWrapper>
      <CookiesBanner />
      <Footer />
    </LayoutWrapper>
  )
}
