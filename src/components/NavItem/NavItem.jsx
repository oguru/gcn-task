import React from "react";
import styles from "./NavItem.module.scss";
import { Link } from "@reach/router";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'

const NavItem = (props) => {
  const {handleClick, hasChildren, name, path} = props;

  if (hasChildren) {
    return (
      <li onClick={handleClick} className={styles.navItemCont}>
          <p className={styles.navItem}>{name}</p>
          <span className={styles.navArrow}>
            <FontAwesomeIcon icon={faAngleRight}/>
          </span>
        </li>
    )
  }

  return (
    <li 
      className={styles.navItemCont} 
      onClick={handleClick}
    >
      <Link
        className={styles.navItem}          
        key={name}
        // getProps={isActive}
        to={path}
      >
        {name}
      </Link>
    </li>
  )
};

export default NavItem;
