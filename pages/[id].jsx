import { useRouter } from 'next/router';
import Layout from '../components/layout/layout';
import styles from '../styles/Details.module.css';
// import image from "../assets/img/banner.png";
import image from '../assets/img/tala2.png';
import Card from '../components/card/Card';
import { cardData } from '../assets/Database';
import Error from '../components/utils/error';
// external imports
import {
  ChevronRight,
  Heart,
  ThreeDots,
} from 'react-bootstrap-icons';
import Image from 'next/image';
import Button from '../components/button/Button';
import useNftDetails from '../hooks/useNftDetails';
import ShortenAddress from '../components/utils/shortenAddress';

import useFetchNFTs from '../hooks/useFetchNFTs';
import useBuyNft from '../hooks/useBuyNft';
const Details = () => {
  const router = useRouter();
  const { nftDetails } = useNftDetails(router.query.id);
  const { nfts } = useFetchNFTs();
  const [handleBuy, { ownerOf }] = useBuyNft();
  if (nftDetails === undefined) {
    return (
      <Layout>
        <Error />
      </Layout>
    );
  } else {
    return (
      <Layout>
        <div className={styles.detailsHeading}>
          <h2>Product Details</h2>
          <p>
            <span>Home</span> <ChevronRight /> Product Details
          </p>
        </div>

        <div className={styles.detailsSectoin}>
          <div className="row">
            <div className="col-md-6">
              <div className={styles.detailsImg}>
                <img
                  src={nftDetails.image}
                  style={{ width: '100%', height: '500px' }}
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className={styles.rightDetails}>
                <div className={styles.dtHeading}>
                  <h3>{nftDetails.name}</h3>
                </div>

                <p>
                  <ShortenAddress address={nftDetails.NFTaddress} />
                </p>
                <h4>{nftDetails.description}</h4>

                <div className={styles.dtNames}>
                  <div>
                    <p>Roylities</p>
                    <h5>{nftDetails.royalityFee}</h5>
                  </div>
                  <div>
                    <p>Owner</p>
                    {ownerOf === undefined ? (
                      <h5>
                        <ShortenAddress address={nftDetails.owner} />
                      </h5>
                    ) : (
                      <h5>
                        <ShortenAddress address={ownerOf} />
                      </h5>
                    )}
                  </div>
                  <div>
                    <p>Creator</p>
                    <h5>
                      <ShortenAddress address={nftDetails.creator} />
                    </h5>
                  </div>
                </div>

                <h4>
                  Price: <span>{nftDetails.price} ETH</span>
                </h4>

                <button
                  className={styles.buyNowBtn}
                  onClick={() =>
                    handleBuy(nftDetails.tokenID, nftDetails.price)
                  }
                >
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>

        <br />
        <br />
        <h5 className={styles.title}>Stats</h5>
        <div className={styles.categoryWrapper}>
          {nftDetails.AGILITY && (
            <div className={styles.catCard}>
              <p>AGILITY</p>
              <h6>{nftDetails.AGILITY}</h6>
            </div>
          )}
          {nftDetails.BREED_COUNT && (
            <div className={styles.catCard}>
              <p>BREED_COUNT</p>
              <h6>{nftDetails.BREED_COUNT}</h6>
            </div>
          )}
          {nftDetails.HEALTH && (
            <div className={styles.catCard}>
              <p>HEALTH</p>
              <h6>{nftDetails.HEALTH}</h6>
            </div>
          )}
          {nftDetails.LUCK && (
            <div className={styles.catCard}>
              <p>LUCK</p>
              <h6>{nftDetails.LUCK}</h6>
            </div>
          )}
          {nftDetails.STAMINA && (
            <div className={styles.catCard}>
              <p>STAMINA</p>
              <h6>{nftDetails.STAMINA}</h6>
            </div>
          )}
          {nftDetails.TIER && (
            <div className={styles.catCard}>
              <p>TIER</p>
              <h6>{nftDetails.TIER}</h6>
            </div>
          )}
          {nftDetails.WEIGHT && (
            <div className={styles.catCard}>
              <p>WEIGHT</p>
              <h6>{nftDetails.WEIGHT}</h6>
            </div>
          )}
        </div>

        <br />
        <h5 className={styles.title}>Attributes</h5>
        <div className={styles.categoryWrapper}>
          {nftDetails.attributes?.map((attribute, id) => (
            <div className={styles.catCard} key={id}>
              <p>{attribute.trait_type}</p>
              <h6>{attribute.value}</h6>
            </div>
          ))}
        </div>
        <br />
        <h5 className={styles.title}>Related Items</h5>
        <div className="row">
          {nfts.map((data, index) =>
            index < 4 ? (
              <div key={index} className="col-md-3 col-sm-6">
                <Card data={data} />
              </div>
            ) : (
              ''
            )
          )}
        </div>
      </Layout>
    );
  }
};

export default Details;
