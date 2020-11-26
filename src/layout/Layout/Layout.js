import { Navbar } from '../Navbar'
import { LayoutWrapper } from './Layout.style'

export default function Layout({ children }) {
  return (
    <LayoutWrapper>
      <Navbar />
      {children}
    </LayoutWrapper>
  )
}
