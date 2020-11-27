import { useUserContext } from '../../contexts/user'
import { React, useEffect } from 'react'
import { Redirect } from '@reach/router'

function Logout() {
  const { logout } = useUserContext()
  useEffect(() => {
    logout()
  }, [])
  return null
}

export default Logout
