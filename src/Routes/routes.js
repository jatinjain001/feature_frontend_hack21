import React from 'react';
import ImgCarousel from '../Components/ImgCarousel';
import {Switch, BrowserRouter as Router , Route} from 'react-router-dom';
import Desc from '../Pages/Desc';
export default function Routing(){
  return(
        <Router>
          <Switch>
             <Route path="/Home" >
                <ImgCarousel/>
             </Route>
          </Switch>

        </Router>

  )
}