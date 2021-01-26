import { CSSTransition } from "react-transition-group";
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from "@reach/router";
import NavItem from "../../components/NavItem";
import React, { useEffect, useState } from "react";
import SocialMediaIcon from "../../components/SocialMediaIcon";
import gcnNavTop from "../../assets/GCNNavTop.png";
import navTransition from "./NavTransition.module.scss";
import styles from "./Navbar.module.scss";

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState("main");
  const [menuHeight, setMenuHeight] = useState(0);
  const [navOpen, setNavOpen] = useState(false);
  const [navJsx, setNavJsx] = useState({"main": 0});

  useEffect(() => {
    const mainLinks = 
      navMainLinks.map((link) => getLinks(link));
    setNavJsx({main: mainLinks});
    navMainLinks.forEach(link => getSubLinks(link));
 }, []);

  useEffect(() => {
    calcHeight();
  }, [activeMenu, navOpen]);

  const calcHeight = () => {
    const navItems = Object.keys(navJsx[activeMenu]);
    if (navItems) {
      const totalHeight = navItems.length * 30 + 1;
      setMenuHeight(totalHeight);
    }
  }

  const navIconAnim = navOpen ? "navCross" : "";

  const navMainLinks = [
    { name: "GCN Channels", childLinks: [
      { name: "GCN Show", path: "../category/gcn-show" },
      { name: "Ask GCN", path: "../category/ask-gcn" },
      { name: "Features", path: "../category/features" },
      { name: "GCN Racing", path: "../category/gcn-racing" },
      { name: "GCN Tech", path: "../category/gcn-tech" },
      { name: "How To", path: "../category/how-to" },
      { name: "Maintenance", path: "../category/maintenance-mondays" },
      { name: "Top 10s", path: "../category/top-10s" },
      { name: "Training", path: "../category/training" }
    ] },
    { name: "Presenters", childLinks: [
      { name: "About", path: "../presenters"},
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
  }

  const getSubLinks = (link) => {
    if (link.hasOwnProperty('childLinks')) {
      const subLinks = 
        link.childLinks.map(subLink => getLinks(subLink));
      setNavJsx
        (navData => ({...navData, [link.name.split(" ").join("")]: subLinks}));
    };
  }

  const getLinks = (link) => {
    if (link.hasOwnProperty('childLinks')) {
      return (
        <NavItem 
          handleClick={() => changeNav(link.name)}
          hasChildren={true}
          key={link.name}
          name={link.name}
          path={link.path}
        />
      );
    }
    return (
      <NavItem 
        handleClick={() => setNavOpen(false)}
        hasChildren={false}
        key={link.name}
        name={link.name}
        path={link.path}
      />
    );
  };

  const toggleNavOpen = () => {
    if (!navOpen) {
      setActiveMenu("main");
    }
    setNavOpen(!navOpen);
  }

  const backArrow = activeMenu === "main" ? "" : (
    <div 
      className={styles.arrowCont} 
      onClick={() => setActiveMenu("main")}
    >
      <span className={styles.navArrow} >
        <FontAwesomeIcon icon={faAngleLeft}/>
      </span>
    </div>
  );

  return (
    <>
      <nav className={styles.navbar}>
        <Link to={"/"}>
          <img 
            alt="GCN Nav Top"
            src={gcnNavTop} />
        </Link>
        <div className={styles.navSecondary}>
          <div 
            className={`${styles.burgerIcon}`}
            onClick={() => toggleNavOpen()} 
          >
            <span className={styles[navIconAnim]}></span>
            <span className={styles[navIconAnim]}></span>
            <span className={styles[navIconAnim]}></span>
          </div>
          <div className={styles.socialMediaIcons}>
            <SocialMediaIcon 
              icon="facebook" 
              isPrimary={true}
              key="facebookn"
              link="https://www.facebook.com/globalcyclingnetwork" 
            />
            <SocialMediaIcon 
              icon="twitter" 
              isPrimary={true}
              key="twittern"
              link="https://twitter.com/gcntweet" 
            />
            <SocialMediaIcon
              icon="instagram" 
              isPrimary={true}
              key="instagramn"
              link="https://www.instagram.com/globalcyclingnetwork/?hl=en"
            />
          </div>
        </div>
        <CSSTransition 
          classNames={navTransition} 
          in={navOpen} 
          timeout={500} 
          unmountOnExit 
        >
          <div 
            className={styles.navLinkBar}
            style={{height: menuHeight}}
          >
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