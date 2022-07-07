import styles from "./Navigation.module.css";
import Logo from "../../assets/img/logo.png";
import { Search, Bell, BrightnessHigh } from "react-bootstrap-icons";
import Image from "next/image";
import Link from "next/link";
import { grabLeftSidebar } from "../leftSidebar/Leftsidebar";

const Navigation = () => {
  const showNav = () => {
    grabLeftSidebar();
  };

  return (
    <div className={styles.navWrapper}>
      <div className="container">
        <div className="row">
          <div className="col-md-2">
            <div className={styles.logoSection}>
              <Link href="/">
                <div className={styles.logo}>
                  <Image src={Logo} alt="" />
                  <h3>LOGO HERE</h3>
                </div>
              </Link>
              {/* <Button text={<List />} onClick={() => showNav()} /> */}
            </div>
          </div>
          <div className="col-md-4">
            <ul className={styles.navRight}>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/details">Explore Product</Link>
              </li>
              <li>
                <Link href="/item">Newest Item</Link>
              </li>
            </ul>
          </div>
          <div className="col-md-6">
            <div className={styles.rightWrapper}>
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search here..."
                  aria-label="Amount (to the nearest dollar)"
                />
                <button className="input-group-text">
                  <Search />
                </button>
              </div>

              <button className="GBtn mb-3">Connect</button>
              <button className={styles.btnSame}>
                <Bell />
              </button>
              <button className={styles.btnSame}>
                <BrightnessHigh />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
