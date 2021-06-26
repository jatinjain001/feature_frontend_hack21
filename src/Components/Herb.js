import React from 'react';
import './herbs.css';
import { Link ,BrowserRouter  as Router} from 'react-router-dom';

function Herbs(props) {
  console.log(props);
    return (
      <>
      <Router>
        <div className="cards container">
          <div className="card"> 
            <Link to="/Home"><img src={props.imgscr} alt="myPic" className="card_img" /></Link>
            <div className="card_info">
              <span className="card_category">{props.title}</span>
              <h3 className="card_title">{props.sname}</h3>
            </div>
          </div>
        </div>
        </Router>
      </>
    );
  }
export default Herbs