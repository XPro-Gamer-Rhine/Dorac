import Layout from "../components/layout/layout";
import styles from "../styles/Details.module.css";
// import image from "../assets/img/banner.png";
import image from "../assets/img/tala2.png";
import Card from "../components/card/Card";
import { cardData } from "../assets/Database";

// external imports
import { ChevronRight, Heart, ThreeDots } from "react-bootstrap-icons";
import Image from "next/image";
import Button from "../components/button/Button";

const Details = () => {
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
              <Image src={image} />
            </div>
          </div>
          <div className="col-md-6">
            <div className={styles.rightDetails}>
              <div className={styles.dtHeading}>
                <h3>Lorem, ipsum dolor.</h3>
                <div className={styles.dtIcons}>
                  <Button text={<Heart />} />
                  <Button text={<ThreeDots />} />
                </div>
              </div>

              <p>lorem Ipsum</p>
              <h4>#22Lorem, Ipsum dolor</h4>

              <div className={styles.dtNames}>
                <div>
                  <p>Category 10% roylities</p>
                  <h5>Brodband</h5>
                </div>
                <div>
                  <p>Colecions</p>
                  <h5>Brodband</h5>
                </div>
                <div>
                  <p>Owner</p>
                  <h5>Brodband</h5>
                </div>
              </div>

              <h4>
                Price: <span>0.11wETH</span>
              </h4>

              <button className={styles.buyNowBtn}>Buy Now</button>
            </div>
          </div>
        </div>
      </div>

      <br />
      <br />
      <h5 className={styles.title}>Category</h5>
      <div className={styles.categoryWrapper}>
        <div className={styles.catCard}>
          <p>ZARY</p>
          <h6>APP</h6>
        </div>
        <div className={styles.catCard}>
          <p>SOMALIAN</p>
          <h6>TRIBUTE</h6>
        </div>
        <div className={styles.catCard}>
          <p>TUNA</p>
          <h6>PIPE</h6>
        </div>
      </div>

      <br />
      <h5 className={styles.title}>Properties</h5>
      <div className={styles.categoryWrapper}>
        <div className={styles.catCard}>
          <p>SOMALIAN</p>
          <h6>TRIBUTE</h6>
        </div>
        <div className={styles.catCard}>
          <p>SOMALIAN</p>
          <h6>TRIBUTE</h6>
        </div>
        <div className={styles.catCard}>
          <p>SOMALIAN</p>
          <h6>TRIBUTE</h6>
        </div>
        <div className={styles.catCard}>
          <p>ZARY</p>
          <h6>APP</h6>
        </div>
        <div className={styles.catCard}>
          <p>SOMALIAN</p>
          <h6>TRIBUTE</h6>
        </div>
        <div className={styles.catCard}>
          <p>TUNA</p>
          <h6>PIPE</h6>
        </div>
      </div>
      <br />
      <h5 className={styles.title}>Related Items</h5>
      <div className="row">
        {cardData.map((data, index) =>
          index < 4 ? (
            <div key={data.id} className="col-md-3 col-sm-6">
              <Card data={data} />
            </div>
          ) : (
            ""
          )
        )}
      </div>
    </Layout>
  );
};

export default Details;
