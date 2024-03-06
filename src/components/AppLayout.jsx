import { Outlet, useNavigation } from 'react-router';
import Navbar from './Navbar';
import CartOverview from './CartOverview';
import Loader from './Loader';

function AppLayout() {
  const { state } = useNavigation();
  const isLoading = state === 'loading';
  const isIdle = state === 'idle';

  return (
    <div className="pb-12">
      {!isLoading && <Loader />}
      <Navbar />
      {isIdle && <Outlet />}
      <CartOverview />
    </div>
  );
}

export default AppLayout;
