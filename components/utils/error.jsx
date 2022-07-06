import React from 'react';
import styles from '../../styles/Details.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ChevronRight } from 'react-bootstrap-icons';
const Error = () => {
  return (
    <>
      <div className={styles.detailsHeading}>
        <h2>Product Details</h2>
        <p>
          <span>Home</span> <ChevronRight /> 404 ERROR
        </p>
      </div>
      <div
        class="spinner-border text-info"
        role="status"
        style={{ marginLeft: '50%', marginTop: '50px' }}
      >
        <span class="visually-hidden" style={{ color: 'white' }}>
          Loading...
        </span>
      </div>
    </>
  );
};

export default Error;
