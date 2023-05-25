import { Container } from '@mui/material'
import React from 'react'
import {Outlet} from "react-router-dom"

const Layout = () => {
  return (
    <Container>
        <Outlet/>
    </Container>
  )
}

export default Layout