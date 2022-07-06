import Navigation from '../Nav/Navigation';
import Footer from '../footer/Footer';
import { useEffect } from 'react';
import { useMoralis } from 'react-moralis';
const Layout = ({ children, home }) => {
  const {
    isWeb3Enabled,
    enableWeb3,
    isAuthenticated,
    isWeb3EnableLoading,
  } = useMoralis();

  useEffect(() => {
    const connectorId = window.localStorage.getItem('connectorId');
    if (isAuthenticated && !isWeb3Enabled && !isWeb3EnableLoading)
      enableWeb3({ provider: connectorId });
  }, [isAuthenticated, isWeb3Enabled]);
  return (
    <>
      <Navigation />
      <div className="container">{children}</div>
      {home ? ' ' : <Footer />}
    </>
  );
};

export default Layout;
