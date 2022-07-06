import styles from './Button.module.css';
import { useMoralis } from 'react-moralis';
import { ArrowRight } from 'react-bootstrap-icons';
import ShortenAddress from '../utils/shortenAddress';
import Link from 'next/link';
const MetamaskConnect = ({ text }) => {
  const {
    authenticate,
    isAuthenticated,
    isAuthenticating,
    user,
    account,
    logout,
  } = useMoralis();

  const login = async () => {
    if (!isAuthenticated) {
      try {
        await authenticate({ provider: 'injected' });
        window.localStorage.setItem('connectorId', 'injected');
      } catch (e) {
        console.error(e);
      }
    }
  };

  const logOut = async () => {
    await logout();
    console.log('logged out');
  };
  return (
    <>
      {account === null && !isAuthenticated ? (
        <button className={styles.myBtn} onClick={authenticate}>
          {text}
        </button>
      ) : (
        <>
          {account !== null && (
            <div className={styles.myBtn}>
              <Link href={'/profile/' + account}>
                <ShortenAddress address={account} />
              </Link>
            </div>
          )}
          <button className={styles.myBtn} onClick={logOut}>
            <ArrowRight />
          </button>
        </>
      )}
    </>
  );
};

export default MetamaskConnect;
