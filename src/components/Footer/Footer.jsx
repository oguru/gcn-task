import { Link } from "@reach/router";
import React, { useEffect, useRef } from "react";
import SocialMediaIcon from "../SocialMediaIcon";
import gcnLogo from "../../assets/GCNLogo.svg";
import styles from "./Footer.module.scss";

const Footer = (props) => {
const {setFooterHeight} = props;

const inputRef = useRef(null);

useEffect(() => {
  const height = inputRef.current.offsetHeight;
  setFooterHeight(height);
}, [inputRef, setFooterHeight]); //error

  return (
    <>
      <footer 
        className={styles.footer}
        ref={inputRef} 
      >
        <div className={styles.footerTop}>
          <Link to={"/"}>
            <img 
              alt="GCN Logo" 
              className={styles.gcnLogo} 
              src={gcnLogo}
            />
          </Link>
          <div className={styles.socialMediaIcons}>
            <SocialMediaIcon
              isPrimary={false} 
              icon="facebook"
              key="facebookf"
              link="https://www.facebook.com/globalcyclingnetwork" 
            />
            <SocialMediaIcon 
              isPrimary={false} 
              icon="twitter" 
              key="twitterf"
              link="https://twitter.com/gcntweet" 
            />
            <SocialMediaIcon 
              isPrimary={false} 
              icon="instagram" 
              key="instagramf"
              link="https://www.instagram.com/globalcyclingnetwork/?hl=en"
            />
          </div>
        </div>
        <div className={styles.footerBot}>
          <div className={styles.footerLinks}>
            <div className={styles.footerCol}>
              <p>Editorial Policy</p>
              <p>Privacy Policy</p>
              <p>Cookie Policy</p>
            </div>
            <div className={styles.footerCol}>
              <p>Promotional Rules</p>
              <p>Terms &amp; Conditions</p>
              <p>Youtube Terms &amp; Conditions</p>
            </div>
          </div>          
        </div>
        <div className={styles.footerLinks}>
          <p>&copy; 2020 Play Sports Network </p>
          <p>info@playsportsnetwork.com</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
