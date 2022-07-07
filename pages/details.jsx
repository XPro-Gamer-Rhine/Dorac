import Image from "next/image";
// external imports
import { useState } from "react";
import { ChevronRight, Heart, ThreeDots } from "react-bootstrap-icons";
import { cardData } from "../assets/Database";
// import image from "../assets/img/banner.png";
import image from "../assets/img/tala2.png";
import Button from "../components/button/Button";
import Card from "../components/card/Card";
import Layout from "../components/layout/layout";
import styles from "../styles/Details.module.css";



const Details = () => {
    const [filtering, setFiltering] = useState("history");

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
                  <p>Owner</p>
                  <h5>Brodband</h5>
                </div>
              </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, est amet. Ex quae explicabo est fuga provident quibusdam sapiente modi?</p>
              <br />

              <h4 className={styles.priceSection}>
                <h5>Price</h5>
                <span>
                  0.11wETH <br /> <p>=$12.234</p>
                </span>
              </h4>

              <button className={styles.buyNowBtn}>Buy Now</button>
              <br />
              <br />
              <ul className={styles.titleFilters}>
                <li
                  onClick={() => setFiltering("history")}
                  className={filtering === "history" && "activeFilter2"}
                >
                  History
                </li>
                <li
                  onClick={() => setFiltering("info")}
                  className={filtering === "info" && "activeFilter2"}
                >
                  Info
                </li>
                <li
                  onClick={() => setFiltering("provenance")}
                  className={filtering === "provenance" && "activeFilter2"}
                >
                  Provenance
                </li>
              </ul>
              <div className={styles.tabData}>
              <h4>
                <h5>Price</h5>
                <span>
                  0.11wETH <br /> <p>=$12.234</p>
                </span>
              </h4>
              <h4>
                <h5>Price</h5>
                <span>
                  0.11wETH <br /> <p>=$12.234</p>
                </span>
              </h4>
              </div>

            </div>
          </div>
        </div>
      </div>


      <br />
      <br />
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
