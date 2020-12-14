import { useState } from "react";
import Footer from "./components/Footer";
import Navbar from "./containers/Navbar";
import Routes from "./containers/Routes";
import Searchbar from "./assets/Searchbar.png"
import styles from "./App.module.scss";

function App() {
const [footerHeight, setFooterHeight] = useState(0);

  return (
    <div 
      className={styles.pageBody} 
      style={{paddingBottom: footerHeight}}
    >
      <Navbar />
      <img
        alt="Searchbar placeholder"
        className={styles.searchBar} 
        src={Searchbar}
      />
      <div className={styles.dashBoard} >
          <Routes />
      </div>      
      <Footer setFooterHeight={setFooterHeight}/>
    </div>
  );
}

export default App;
