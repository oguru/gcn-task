import Routes from "./containers/Routes";
import styles from "./App.module.scss";
import Navbar from "./containers/Navbar";
import Footer from "./components/Footer";
import Searchbar from "./assets/Searchbar.png"

function App() {

//   const fetchData = (input) => {    
//     fetch(`https://www.omdbapi.com/?apikey=a6790f0e&${parameter}=${input}&page=${page}&plot=full`)
//        .then(result => result.json())
//        .then(result => setDetails(result, type))
//        .catch(err => console.log(err));
//  };

  return (
    <div className={styles.pageBody}>
      <Navbar />
      <img className={styles.searchBar} src={Searchbar}></img>
      <div className={styles.dashBoard}>
          <Routes />
        {/* </Routes> */}
      </div>      
      <Footer />
    </div>
  );
}

export default App;
