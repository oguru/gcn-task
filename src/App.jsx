import Routes from "./containers/Routes";
import styles from "./App.module.scss";
import Navbar from "./containers/Navbar";
import Footer from "./components/Footer";

function App() {

  return (
    <>
      <Navbar />
      <div className={styles.dashBoard}>
      {/* <div className={styles.dashBoard}> */}
        {/* <Routes>
        
        </Routes> */}
      </div>      
      <Footer />
    </>
  );
}

export default App;
