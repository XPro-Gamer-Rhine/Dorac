import Layout from '../../components/layout/layout';
import styles from '../../styles/Profile.module.css';
import Banner from '../../assets/img/banner2.png';
import Man from '../../assets/img/tala2.png';
import { cardData } from '../../assets/Database';
import Davatar from '@davatar/react';
import Image from 'next/image';
import {
  Twitter,
  Share,
  ThreeDots,
  PencilSquare,
} from 'react-bootstrap-icons';
import Button from '../../components/button/Button';
import Card from '../../components/card/Card';
import { useMoralis } from 'react-moralis';
import ShortenAddress from '../../components/utils/shortenAddress';
import useFetcUserhNFTs from '../../hooks/useFetchUserNFTs';

const Profile = () => {
  const { Moralis, user, account } = useMoralis();
  const { userNfts } = useFetcUserhNFTs();

  return (
    <Layout>
      <div className={styles.header}>
        <Image src={Banner} alt="image" />
      </div>
      <div className={styles.profile}>
        {account === undefined || account === null ? (
          <div className={styles.profilePic}>
            <Image src={Man} alt="image" />
          </div>
        ) : (
          <div
            style={{
              width: '10%',
              margin: '0 auto',
              marginTop: '-8%',
              position: 'relative',
            }}
          >
            <Davatar
              size={155}
              address={account}
              generatedAvatarType="jazzicon"
            />
          </div>
        )}

        <div className={styles.texts}>
          <h2>
            <ShortenAddress address={account} />
          </h2>
          <div className={styles.ico}>
            <span>
              <Twitter />{' '}
            </span>
            loremipsum
          </div>
          <div className={styles.ering}>
            <p>
              <span>189k</span> followers
            </p>
            <p>
              <span>123</span> following
            </p>
          </div>

          <div className={styles.buttons}>
            <Button text="Follow" />
            <Button text={<Share />} />
            <Button text={<ThreeDots />} />
            <Button text={<PencilSquare />} />
          </div>
        </div>
      </div>

      <br />
      <h5 className={styles.title}>Related Items</h5>
      {account !== undefined && account !== null ? (
        <div className="row">
          {userNfts.map((data, index) => (
            <div key={index} className="col-md-3 col-sm-6">
              <Card data={data} />
            </div>
          ))}
        </div>
      ) : (
        <div
          class="spinner-border text-info"
          role="status"
          style={{ marginLeft: '50%', marginTop: '50px' }}
        >
          <span class="visually-hidden" style={{ color: 'white' }}>
            Loading...
          </span>
        </div>
      )}
    </Layout>
  );
};

export default Profile;
