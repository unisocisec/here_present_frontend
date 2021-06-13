import React, { createContext, useContext, useState } from 'react'

const UserCurrent = createContext(null)

const UserCurrentProvider = ({ children }) => {
  const [userCurrent, setUserCurrent] = useState()

  return (
    <UserCurrent.Provider value={{ userCurrent, setUserCurrent }}>
      {children}
    </UserCurrent.Provider>
  )
}

export default UserCurrentProvider

export function useCurrentUser() {
  const context = useContext(UserCurrent)
  const { userCurrent, setUserCurrent } = context
  return { userCurrent, setUserCurrent }
}
