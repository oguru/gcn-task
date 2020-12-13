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
          <div>
            
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
