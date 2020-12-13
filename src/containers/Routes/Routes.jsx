import React from "react";
import styles from "./Routes.module.scss";
import routeAnimStyles from "./RouteAnim.module.scss";
import { Router, Location } from '@reach/router';
import { CSSTransition, TransitionGroup } from "react-transition-group";
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
import searchbarImg from "../../assets/Searchbar.png";
import simonRImg from "../../assets/SimonR.png";
import techImg from "../../assets/Tech.png";
import tomLImg from "../../assets/TomL.png";
import top10sImg from "../../assets/Top10s.png";
import trainingImg from "../../assets/Training.png";

const Routes = () => {

  const AskGcn = () => <img className={styles.placeholderImg} src={askGcnImg}></img>
  const ConorD = () => <img className={styles.placeholderImg} src={conorDImg}></img>
  const DanielL = () => <img className={styles.placeholderImg} src={danielLImg}></img>
  const Features = () => <img className={styles.placeholderImg} src={featuresImg}></img>
  const GcnShow = () => <img className={styles.placeholderImg} src={gcnShowImg}></img>
  const Home = () => <img className={styles.placeholderImg} src={homeImg}></img>
  const HowTo = () => <img className={styles.placeholderImg} src={howToImg}></img>
  const JamesLW = () => <img className={styles.placeholderImg} src={jamesLWImg}></img>
  const JonC = () => <img className={styles.placeholderImg} src={jonCImg}></img>
  const Maintenance = () => <img className={styles.placeholderImg} src={maintenanceImg}></img>
  const ManonL = () => <img className={styles.placeholderImg} src={manonLImg}></img>
  const OliverB = () => <img className={styles.placeholderImg} src={oliverBImg}></img>
  const Presenters = () => <img className={styles.placeholderImg} src={presentersImg}></img>
  const Racing = () => <img className={styles.placeholderImg} src={racingImg}></img>
  const SimonR = () => <img className={styles.placeholderImg} src={simonRImg}></img>
  const Tech = () => <img className={styles.placeholderImg} src={techImg}></img>
  const TomL = () => <img className={styles.placeholderImg} src={tomLImg}></img>
  const Top10s = () => <img className={styles.placeholderImg} src={top10sImg}></img>
  const Training = () => <img className={styles.placeholderImg} src={trainingImg}></img>



  return (
    <>
    <Location>
      {({ location }) => (
      <TransitionGroup>
        <CSSTransition key={location.key} classNames={routeAnimStyles} timeout={500}>
          <Router>
            {/* <Redirect noThrow from="/" to="home" /> */}
            <Home path="/" />
            <AskGcn path="category/ask-gcn" />
            <ConorD path="presenters/conor-dunne" />
            <DanielL path="presenters/daniel-lloyd" />
            <Features path="category/features" />
            <JamesLW path="presenters/james-lw" />
            <JonC path="presenters/jon-cannings" />
            <ManonL path="presenters/manon-lloyd" />
            <OliverB path="presenters/oliver-bridgewood" />
            <Presenters path="presenters" />
            <SimonR path="presenters/simon-richardson" />
            <TomL path="presenters/tom-last" />
            <GcnShow path="category/gcn-show" />
            <HowTo path="category/how-to" />
            <Maintenance path="category/maintenance-mondays" />
            <Racing path="category/gcn-racing" />
            <Tech path="category/gcn-tech" />
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
