import React, { useEffect, useState } from 'react'
import { Route as RRDRoute, Redirect } from 'react-router-dom'
import { useToast } from "@chakra-ui/react"

export function Route({ isPrivate, isLogin, isPublic, Component, ...rest }) {
  const [logged, setLogged] = useState(false)
  const toast = useToast()

  useEffect(() => {
    async function verifyLogged() {
      const token = await localStorage.getItem('token')
      setLogged(!!token)
    }
    verifyLogged()
  }, [Component])

  if (!logged && isPrivate) {
    toast({
      title: "Sem permissão",
      description: "É necessário logar...",
      position: "bottom-right",
      status: "error",
      duration: 6000,
      isClosable: true,
    })
    return <Redirect to="/" />
  }

  if (logged && isLogin) {
    return <Redirect to="/ClassesBoard" />
  }

  return (
    <RRDRoute
      {...rest}
      render={props => (
        <Component {...props} />
      )}
    />
  )
}
