/* eslint-disable react/prop-types */
function AppLayout({ children }) {
  return (
    <div className="w-full h-screen flex flex-col justify-between">
      {children}
    </div>
  );
}

export default AppLayout;
