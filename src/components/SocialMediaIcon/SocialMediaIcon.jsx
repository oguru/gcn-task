import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import React from "react";
import styles from "./SocialMediaIcon.module.scss";


const SocialMediaIcon = (props) => {
  const {isPrimary, icon, link} = props;

  const checkIcon = () => {
    switch (icon) {
      case "twitter":
        return faTwitter;
      case "facebook":
        return faFacebookF;
      default:
        return faInstagram;
    }
  }

  const mediaIconStyle = isPrimary ? 
    `${styles.mediaIconCont} ${styles.navIcon}` 
    : 
    `${styles.mediaIconCont} ${styles.footerIcon}`;

  return (
    <>
      <a 
        href={link} 
        className={mediaIconStyle} 
        target="blank"
      >
        <FontAwesomeIcon 
          className={styles.mediaIcon} 
          icon={checkIcon()}
        />
      </a>
    </>
  );
};

export default SocialMediaIcon;
