import React, { useEffect, useState } from "react";
import { Link } from "@reach/router";
import styles from "./Navbar.module.scss";
import navTransition from "./NavTransition.module.scss";
import { CSSTransition } from "react-transition-group";
import NavItem from "../../components/NavItem";
import PropTypes from 'prop-types';
import gcnNavTop from "../../assets/GCNNavTop.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'

const Navbar = (props) => {

  // const [navLinkVisibility, toggleNavOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState("main");
  const [menuHeight, setMenuHeight] = useState(0);
  const [navOpen, setNavOpen] = useState(false);
  const [navJsx, setNavJsx] = useState({"main": 0});
  // const [navSublinks, setNavSublinks] = useState({"main": 1})

  useEffect(() => {
    const mainLinks = navMainLinks.map((link, index) => getLinks(link, index));
    setNavJsx({main: mainLinks});
    navMainLinks.forEach(link => getSubLinks(link));
 }, []);

  useEffect(() => {
    calcHeight();
  }, [activeMenu, navOpen]);

  const calcHeight = () => {
    const navItems = Object.keys(navJsx[activeMenu]);
    console.log(navItems);
    if (navItems) {
      const totalHeight = navItems.length * 30;
      setMenuHeight(totalHeight)
    }
  }

  const navIconAnim = navOpen ? "navCross" : "";

  const navMainLinks = [
    { name: "GCN Channels", childLinks: [
      { name: "GCN Show", path: "../category/gcn-show" },
      { name: "How To", path: "../category/how-to" },
      { name: "Maintenance", path: "../category/maintenance-mondays" },
      { name: "Ask GCN", path: "../category/ask-gcn" },
      { name: "Training", path: "../category/training" },
      { name: "Features", path: "../category/features" },
      { name: "Top 10s", path: "../category/top-10s" },
      { name: "GCN Racing", path: "../category/gcn-racing" },
      { name: "GCN Tech", path: "../category/gcn-tech" }
    ] },
    { name: "Presenters", childLinks: [
      {name: "About", path: "../presenters"},
      { name: "Conor Dunne", path: "../presenters/conor-dunne" },
      { name: "Daniel Lloyd", path: "../presenters/daniel-lloyd" },
      { name: "James Lowsley-Williams", path: "../presenters/james-lw" },
      { name: "Jon Cannings", path: "../presenters/jon-cannings" },
      { name: "Manon Lloyd", path: "../presenters/manon-lloyd" },
      { name: "Oliver Bridgewood", path: "../presenters/oliver-bridgewood" },
      { name: "Simon Richardson", path: "../presenters/simon-richardson" },
      { name: "Tom Last", path: "../presenters/tom-last" }      
    ] },
    { name: "Archives", path: "../archives" }
  ];

  const changeNav = (menuName) => {
    setActiveMenu(menuName.split(" ").join(""));
    // setMenuHeight("");
    // calcHeight();
  }

  const getSubLinks = (link) => {
    if (link.hasOwnProperty('childLinks')) {
      const subLinks = link.childLinks.map(subLink => getLinks(subLink));
      setNavJsx(navData => ({...navData, [link.name.split(" ").join("")]: subLinks}));
    };
  }

  const getLinks = (link, index) => {
    if (link.hasOwnProperty('childLinks')) {
      return (
        <li onClick={() => changeNav(link.name)} className={styles.navItemCont}>
          <p className={styles.navItem}>{link.name}</p>
          <span className={styles.navArrow}>
            <FontAwesomeIcon icon={faAngleRight}/>
          </span>
        </li>
      );
    }
    return (
      <li className={styles.navItemCont} onClick={() => setNavOpen(false)}>
        <Link
          className={styles.navItem}          
          key={link.name}
          // getProps={isActive}
          to={link.path}
        >
          {link.name}
        </Link>
        {/* <NavItem name={link.name} index={index} path={link.path} /> */}
      </li>
    );
  };

  const toggleNavOpen = () => {
    if (!navOpen) {
      setActiveMenu("main");
    }
    setNavOpen(!navOpen);
  }

  const backArrow = activeMenu === "main" ? "" : (
    <div className={styles.arrowCont} onClick={() => setActiveMenu("main")}>
      <span className={styles.navArrow} >
        <FontAwesomeIcon icon={faAngleLeft}/>
      </span>
    </div>
  );

  return (
    <>
      <nav className={styles.navbar}>
        <Link to={"/"}>
          <img src={gcnNavTop} alt="GCN Nav Top"></img>
        </Link>
        <div className={styles.navSecondary}>
          <div onClick={() => toggleNavOpen()} className={`${styles.burgerIcon}`}>
            <span className={styles[navIconAnim]}></span>
            <span className={styles[navIconAnim]}></span>
            <span className={styles[navIconAnim]}></span>
          </div>
        </div>
         <CSSTransition classNames={navTransition} in={navOpen} timeout={500} unmountOnExit >
          <div className={styles.navLinkBar} style={{height: menuHeight}}>
              {backArrow}
            <ul>
              {navJsx[activeMenu]}
            </ul>
          </div>
        </CSSTransition>
      </nav>
    </>
  );
};

export default Navbar;