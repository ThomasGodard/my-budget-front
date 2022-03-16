import MenuTop from '../components/menu-top'
import { Outlet } from 'react-router'


export default function NavbarLayout() {
  return (
    <>
      <MenuTop />
      <Outlet />
    </>
);
}

