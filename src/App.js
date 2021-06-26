import './App.css';

import ImgCarousel from './Components/ImgCarousel';
import Herbs from './Components/Herb'
import Footer from './Components/footer';
import Navbar from './Components/Navbar';

function App() {

  const styles={
    justifyContent:"row",
    display: "flex",
    float:"left",
  };
  return (
    <>
    <Navbar/>
    <ImgCarousel/>
     <div style={styles} className="container "> 
        <Herbs/>
     </div>
    <Footer/>
    </>
  );
}

export default App; 
