import React from 'react';
import {herbData} from '../data';
import './herbs.css';

function Herbs (){
  const styles={
    margin:"20px 20px 20px 20px",
  }
    return (
        <>
          {herbData.map((data) => {
            return (
              <div style={styles}>
                <Herb 
                  image={data.imgsrc}
                  title={data.title}
                  description={data.description}
                />
              </div>
            );
          })}
      </>
    );
  };

  const Herb = ({image, title,description}) => {
      const width="18rem";
    return (
        <div className="card" style={{width}}>
        <img className="card-img-top" src={{image}} alt="Card image cap"/>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <a href="#">Learn more</a>
        </div>
      </div>
    );
  };
  export default Herbs;