import Layout from './components/Layout'
import routes from './routes'
import Page404 from './pages/Page404'

import {createBrowserRouter, RouterProvider} from 'react-router-dom'

function App() {
  const router = createBrowserRouter([
    {
      element: <Layout />,
      errorElement: <Page404 />,
      children: routes,
    }
  ])

  return (
    <RouterProvider router={router} />
  );
}

export default App;
