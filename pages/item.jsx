import Layout from "../components/layout/layout";
import styles from "../styles/Profile.module.css";
import Banner from "../assets/img/banner2.png";
import Man from "../assets/img/tala2.png";
import { cardData } from "../assets/Database";

import Image from "next/image";
import { Twitter, Share, ThreeDots, PencilSquare } from "react-bootstrap-icons";
import Button from "../components/button/Button";
import Card from "../components/card/Card";

const Profile = () => {
  return (
    <Layout>
      <div className={styles.header}>
        <Image src={Banner} alt="image" />
      </div>
      <div className={styles.profile}>
        <div className={styles.profilePic}>
          <Image src={Man} alt="image" />
        </div>
        <div className={styles.texts}>
          <h2>Justin Torff</h2>
          <div className={styles.ico}>
            <span>
              <Twitter />{" "}
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

export default Profile;
