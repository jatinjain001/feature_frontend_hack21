import './App.css';

import ImgCarousel from './Components/ImgCarousel';
import Herbs from './Components/Herb';
import {herbData} from './data.js';
import Routing from './Routes/routes';
import Navbar from './Components/Navbar';


function App() {
  return (
    <>
    <Navbar/>
    <Routing/>
    <ImgCarousel/>
    
    {herbData.map((val) => {
      return (
        <Herbs  style={{positon : 'relative'}}
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
