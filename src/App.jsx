import Routes from "./containers/Routes";
import styles from "./App.module.scss";
import Navbar from "./containers/Navbar";
import Footer from "./components/Footer";
import Searchbar from "./assets/Searchbar.png"
import { useState } from "react";

function App() {

//   const fetchData = (input) => {    
//     fetch(`https://www.omdbapi.com/?apikey=a6790f0e&${parameter}=${input}&page=${page}&plot=full`)
//        .then(result => result.json())
//        .then(result => setDetails(result, type))
//        .catch(err => console.log(err));
//  };

const [footerHeight, setFooterHeight] = useState(0);

  return (
    <div className={styles.pageBody} style={{paddingBottom: footerHeight}}>
      <Navbar />
      <img className={styles.searchBar} src={Searchbar}></img>
      <div className={styles.dashBoard} >
          <Routes />
        {/* </Routes> */}
      </div>      
      <Footer setFooterHeight={setFooterHeight}/>
    </div>
  );
}

export default App;
