import Image from 'next/image';
import Link from 'next/link';
import { Heart } from 'react-bootstrap-icons';
import ShortenAddress from '../utils/shortenAddress';
// internal imports
import styles from './Card.module.css';

const Card = ({ data }) => {
  const {
    image,
    name,
    description,
    symbol,
    tokenAddress,
    ownerOf,
    tokenId,
  } = data;
  return (
    <div className={`card ${styles.myCard}`}>
      <div className={styles.image}>
        <img
          src={image}
          alt="Image"
          style={{ width: '100%', height: '300px' }}
        />
      </div>
      <div className="card-body">
        <div className={styles.customCB}>
          <div className={styles.cardHeader}>
            <div className={styles.headerImages}>
              <img src={image} alt="Image" />
              <ShortenAddress
                address={ownerOf}
                style={{ color: 'gray' }}
              />
            </div>
          </div>
          <h5>{name}</h5>
          <p>{description}</p>
        </div>
      </div>
      <div className="card-footer">
        <div className={styles.cardFooter}>
          <h5>{symbol} ETH</h5>
          <button className="button">
            <Link href={'/' + tokenId}>Buy Now</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
