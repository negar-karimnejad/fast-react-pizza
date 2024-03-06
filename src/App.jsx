import { RouterProvider } from 'react-router-dom';
import { router } from './routes';
import { Provider } from 'react-redux';
import store from './store';

export default function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}
