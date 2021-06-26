import './App.css';

import ImgCarousel from './Components/ImgCarousel';
import Herbs from './Components/Herb'
import Footer from './Components/Footer';
import {herbData} from './data.js';
import Navbar from './Components/Navbar';


function App() {
  return (
    <>
    <Navbar/>
    <ImgCarousel/>
    {herbData.map((val) => {
      return (
        <Herbs
          key={val.id}
          imgscr={val.imgsrc}
          title={val.title}
          desc={val.description}
        />
      );
    })}
    </>
  );
}

export default App; 
