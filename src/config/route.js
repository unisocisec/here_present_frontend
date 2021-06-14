import React, { useEffect, useState } from 'react'
import { Route as RRDRoute, Redirect } from 'react-router-dom'
import { useToast } from "@chakra-ui/react"

export function Route({ isPrivate, isLogin, isPublic, Component, ...rest }) {
  const toast = useToast()
  const token = localStorage.getItem('token')
  if (!token && isPrivate) {
    toast({
      title: "Sem permissão",
      description: "É necessário logar...",
      position: "bottom-right",
      status: "error",
      duration: 6000,
      isClosable: true,
    })
    return <Redirect to="/" />
  } else if (token && isLogin) {
    return <Redirect to="/ClassesBoard" />
  } else {
    return (
      <RRDRoute
        {...rest}
        render={props => (
          <Component {...props} />
        )}
      />
    )
  }
}
