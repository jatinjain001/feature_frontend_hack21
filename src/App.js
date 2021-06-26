import './App.css';

import ImgCarousel from './Components/ImgCarousel';
import Herbs from './Components/Herb';
import {herbData} from './data.js';
import Footer from './Components/footer';

import Navbar from './Components/Navbar';


function App() {
  return (
    <>
    <Navbar/>
    <ImgCarousel/>
    
    {herbData.map((val) => {
      return (
        <div>
        <Herbs  style={{positon : 'relative'}}
          key={val.id}
          imgscr={val.imgsrc}
          title={val.title}
          desc={val.description}
        />
        </div>
      );
    })}
    <div>
      <Footer/>
      </div>

    
    
   

    </>
  );
}

export default App; 
