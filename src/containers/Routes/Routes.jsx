import React from "react";
import styles from "./Routes.module.scss";
import routeAnimStyles from "./RouteAnim.module.scss";
import { Router, Location, Redirect } from '@reach/router';
import { CSSTransition, TransitionGroup } from "react-transition-group";
import archiveImg from "../../assets/Archive.png";
import askGcnImg from "../../assets/AskGCN.png";
import homeImg from "../../assets/Home.png";
import conorDImg from "../../assets/ConorD.png";
import danielLImg from "../../assets/DanielL.png";
import featuresImg from "../../assets/Features.png";
import gcnShowImg from "../../assets/GCNShow.png";
import howToImg from "../../assets/HowTo.png";
import jamesLWImg from "../../assets/JamesLW.png";
import jonCImg from "../../assets/JonC.png";
import maintenanceImg from "../../assets/Maintenance.png";
import manonLImg from "../../assets/ManonL.png";
import oliverBImg from "../../assets/OliverB.png";
import presentersImg from "../../assets/Presenters.png";
import racingImg from "../../assets/Racing.png";
import simonRImg from "../../assets/SimonR.png";
import techImg from "../../assets/Tech.png";
import tomLImg from "../../assets/TomL.png";
import top10sImg from "../../assets/Top10s.png";
import trainingImg from "../../assets/Training.png";

const Routes = () => {

  const AskGcn = () => 
    <img
      alt="Ask GCN page placeholder"
      className={styles.placeholderImg} 
      src={askGcnImg}
    />
  const Archive = () => 
    <img 
      alt="Archive page placeholder"
      className={styles.placeholderImg} 
      src={archiveImg}
    />
  const ConorD = () => 
    <img 
      alt="Conor D page placeholder"
      className={styles.placeholderImg} 
      src={conorDImg}
    />
  const DanielL = () => 
    <img 
      alt="Daniel L page placeholder"
      className={styles.placeholderImg} 
      src={danielLImg}
    />
  const Features = () => 
    <img 
      alt="Features page placeholder"
      className={styles.placeholderImg} 
      src={featuresImg}
    />
  const GcnShow = () => 
    <img 
      alt="GCN show page placeholder"
      className={styles.placeholderImg} 
      src={gcnShowImg}
    />
  const Home = () => 
    <img 
      alt="Home page placeholder"
      className={styles.placeholderImg} 
      src={homeImg}
      />
  const HowTo = () => 
    <img 
      alt="How to page placeholder"
      className={styles.placeholderImg} 
      src={howToImg}
    />
  const JamesLW = () => 
    <img 
      alt="James LW page placeholder"
      className={styles.placeholderImg} 
      src={jamesLWImg}
    />
  const JonC = () => 
    <img 
      alt="Jon C page placeholder"
      className={styles.placeholderImg} 
      src={jonCImg}
    />
  const Maintenance = () => 
    <img 
      alt="Maintenance page placeholder"
      className={styles.placeholderImg} 
      src={maintenanceImg}
    />
  const ManonL = () => 
    <img 
      alt="Manon L page placeholder"
      className={styles.placeholderImg} 
      src={manonLImg}
    />
  const OliverB = () => 
    <img 
      alt="Oliver B page placeholder"
      className={styles.placeholderImg} 
      src={oliverBImg}
    />
  const Presenters = () => 
    <img 
      alt="Presenters page placeholder"
      className={styles.placeholderImg} 
      src={presentersImg}
    />
  const Racing = () => 
    <img 
      alt="GCN racing page placeholder"
      className={styles.placeholderImg} 
      src={racingImg}
    />
  const SimonR = () => 
    <img 
      alt="Simon R page placeholder"
      className={styles.placeholderImg} 
      src={simonRImg}
    />
  const Tech = () => 
    <img 
      alt="Tech page placeholder"
      className={styles.placeholderImg} 
      src={techImg}
    />
  const TomL = () => 
  <img 
    alt="Tom L page placeholder"
    className={styles.placeholderImg} 
    src={tomLImg}
    />
  const Top10s = () => 
    <img 
      alt="Top 10s page placeholder"
      className={styles.placeholderImg} 
      src={top10sImg}
    />
  const Training = () => 
    <img 
      alt="Training page placeholder"
      className={styles.placeholderImg} 
      src={trainingImg}
    />



  return (
    <>
    <Location>
      {({ location }) => (
      <TransitionGroup>
        <CSSTransition key={location.key} classNames={routeAnimStyles} timeout={500}>
          <Router>
            <Redirect noThrow from="/" to="/" />
            <AskGcn path="category/ask-gcn" />
            <Archive path="archives" />
            <ConorD path="presenters/conor-dunne" />
            <DanielL path="presenters/daniel-lloyd" />
            <Features path="category/features" />
            <GcnShow path="category/gcn-show" />
            <Home path="/" />
            <HowTo path="category/how-to" />
            <JamesLW path="presenters/james-lw" />
            <JonC path="presenters/jon-cannings" />
            <Maintenance path="category/maintenance-mondays" />
            <ManonL path="presenters/manon-lloyd" />
            <OliverB path="presenters/oliver-bridgewood" />
            <Presenters path="presenters" />
            <Racing path="category/gcn-racing" />
            <SimonR path="presenters/simon-richardson" />
            <Tech path="category/gcn-tech" />
            <TomL path="presenters/tom-last" />
            <Top10s path="category/top-10s" />
            <Training path="category/training" />
          </Router>
        </CSSTransition>
      </TransitionGroup>
      )}
      </Location>
    </>
  );
};

export default Routes;
