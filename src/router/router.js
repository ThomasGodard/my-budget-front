import { useRoutes } from 'react-router'
import NavbarLayout from '../layouts/navbar-layout'
import GlobalExpensesPage from '../pages/global-expenses'
import CategoryExpensesPage from '../pages/category-expenses'
import AuthPage from '../pages/auth'

function AppRouter() {
  return useRoutes([
    {
      path: '/', element: <NavbarLayout/>,
      children: [
        {
          index: true,
          element: <GlobalExpensesPage/>
        },
        {
          path: 'category',
          element: <CategoryExpensesPage/>
        }
      ]
    },
    {path: 'auth', element: <AuthPage/>}
  ])
}

export default AppRouter;
