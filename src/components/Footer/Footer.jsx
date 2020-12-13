import React from "react";
import styles from "./Footer.module.scss";
import gcnLogo from "../../assets/GCNLogo.svg";
import gcnLogoTxt from "../../assets/GCNLogoTxt.svg";

const Footer = () => {
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.footerTop}>
          <img className={styles.gcnLogo} src={gcnLogo} alt="GCN Logo"/>
        </div>
        <div className={styles.footerBot}>
          {/* <Link to>
          </Link> */}
          <div className={styles.footerLinks}>
            <div className={styles.footerCol}>
              <p>Editorial Policy</p>
              <p>Privacy Policy</p>
              <p>Cookie Policy</p>
            <p>&copy; 2020 Play Sports Network </p>
            </div>
            <div className={styles.footerCol}>
              <p>Promotional Rules</p>
              <p>Terms &amp; Conditions</p>
              <p>Youtube Terms &amp; Conditions</p>
            <p>info@playsportsnetwork.com</p>
            </div>
          </div>
          {/* <div className={styles.flexRow}> */}
          {/* </div> */}
        </div>
      </footer>
    </>
  );
};

export default Footer;
