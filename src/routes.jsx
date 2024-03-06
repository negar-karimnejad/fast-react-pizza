import { createBrowserRouter } from 'react-router-dom';
import AppLayout from './components/AppLayout';
import Error from './components/Error';
import Cart from './pages/Cart';
import CreateOrder from './pages/CreateOrder';
import Homepage from './pages/Homepage';
import Menu, { loader as menuLoader } from './pages/Menu';
import Order from './pages/Order';
import { action as createOrderAction } from './pages/CreateOrder';

export const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,

    children: [
      { path: '/', element: <Homepage /> },
      {
        path: '/menu',
        element: <Menu />,
        loader: menuLoader,
        errorElement: <Error />,
      },
      { path: '/cart', element: <Cart /> },
      {
        path: '/order/new',
        element: <CreateOrder />,
        action: createOrderAction,
      },
      { path: '/order/:orderId', element: <Order /> },
    ],
  },
]);
