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

const Navbar = (props) => {

  // const [navLinkVisibility, toggleNavLinks] = useState(false);
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

//  const calcHeight = (el) => {
//    const height = el.offsetHeight;
//    setMenuHeight(height);
//  }

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
          <span className={styles.arrowRight}>
            <FontAwesomeIcon icon={faAngleRight}/>
          </span>
        </li>
      );
    }
    return (
      <li className={styles.navItemCont}>
        <Link
          className={styles.navItem}
          onClick={() => toggleNavLinks()}
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

  const toggleNavLinks = () => {
    if (!navOpen) {
      setActiveMenu("main");
      // calcHeight();
    } else {
      // setMenuHeight(0);
    }
    setNavOpen(!navOpen);
  }

  const navItems = () => {
    if (navOpen) {
      return navJsx[activeMenu];
    }    
  }

  // Burger onClick
  // Run add links 
  // Set height based on number of links * linkSize
  // Run add class function
  // Add links from activeMenu
  // If activeMenu === "main" { add css dropdown class }

  // const openNavItems = () => {
  //   const navMenuItems = Object.values(navJsx);

  //   return (
  //     navMenuItems.map((menuName) => {
  //       return (
  //         <CSSTransition classNames={navTransition} in={navOpen && navJsx[activeMenu] === menuName} onEnter={calcHeight}  timeout={500} unmountOnExit >
  //           <div className={styles.navLinkBar} id="transitionEl" style={{height: menuHeight}}>
  //             <ul>
  //               {navJsx[activeMenu]}
  //             </ul>
  //           </div>
  //         </CSSTransition>
  //       )
  //     })
  //   )
  // }

  return (
    <>
      <nav className={styles.navbar}>
        <img src={gcnNavTop} alt="GCN Nav Top"></img>
        <div className={styles.navSecondary}>
          <div onClick={() => toggleNavLinks()} className={`${styles.burgerIcon}`}>
            <span className={styles[navIconAnim]}></span>
            <span className={styles[navIconAnim]}></span>
            <span className={styles[navIconAnim]}></span>
          </div>
        </div>
         <CSSTransition classNames={navTransition} in={navOpen} timeout={500} unmountOnExit >
          <div className={styles.navLinkBar} style={{height: menuHeight}}>
            <ul>
              {navJsx[activeMenu]}
            </ul>
          </div>
        </CSSTransition>
        {/* {openNavItems()} */}
      </nav>
    </>
  );
};

export default Navbar;


// {/* <CSSTransition classNames={navTransition} in={navOpen} onEnter={calcHeight} timeout={500} unmountOnExit >
// <div className={styles.navLinkBar} style={{height: menuHeight}}>
//   <ul>
//     {navJsx[activeMenu]}
//     {/* {navItems()} */}
//       {/* {handleLinks} */}
//   </ul>
// </div>
// </CSSTransition> */}