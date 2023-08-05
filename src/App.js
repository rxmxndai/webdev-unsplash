import Navbar from './components/Navigation/Navbar';
import Form from './pages/Form';
import Homepage from './pages/Homepage';

import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import SearchPage from './pages/SearchPage';

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  )
}


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Homepage />
      },
      {
        path: "/add-image",
        element: <Form />
      },
      {
        path: "/search/:query",
        element: <SearchPage />
      }
    ]
  }
])

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
