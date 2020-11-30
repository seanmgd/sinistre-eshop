import React from 'react'
import { useUserContext } from '../../contexts/user'

function Logout() {
  const { logout } = useUserContext()
  React.useEffect(() => {
    logout()
  }, [logout])
  return null
}

export default Logout
