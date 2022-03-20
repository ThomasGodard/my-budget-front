import MenuTop from '../shared-components/menu-top'
import { Outlet } from 'react-router'
import { Container } from '@mui/material'


export default function NavbarLayout() {
  return (
    <>
      <MenuTop/>
      <Container>
        <Outlet/>
      </Container>
    </>
  );
}

