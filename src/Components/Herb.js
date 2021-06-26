import React from 'react';
import './herbs.css';
    
function Herbs(props) {
  console.log(props);
    return (
      <>
        <div className="cards container">
          <div className="card">
            <img src={props.imgscr} alt="myPic" className="card_img" />
            <div className="card_info">
              <span className="card_category">{props.title}</span>
              <h3 className="card_title">{props.sname}</h3>
            </div>
          </div>
        </div>
      </>
    );
  }
export default Herbs