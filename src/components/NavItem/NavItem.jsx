import React from "react";
import styles from "./NavItem.module.scss";
import { Link } from "@reach/router";

const NavItem = (props) => {
  const {handleClick, hasChildren, name, path} = props;

  // const showChildren = hasChildren ? <a><FontAwesomeIcon icon={faAngleRight}/></a> : "";

  const navLink = path ? 
    (<Link
      key={name}
      // getProps={isActive}
      to={path}
    >
      <p>{name}</p>
    </Link>
    ):(
      <p onClick={handleClick}>{name}</p>
    )

  return (
    <>
      <li key={name} className={styles.navItem}>
        {navLink}
      </li>
    </>
  );
};

export default NavItem;
