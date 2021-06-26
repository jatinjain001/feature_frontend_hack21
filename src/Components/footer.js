import React from 'react';

import './footer.css';

function Footer() {
    return (
    <footer className="bg-success footer">
    <div className="container py-5">
      <div className="row">
        <div className="col-lg-4 text-white text-center">
          <p>By experimenting with various types of herbs you will become familiar with those herbs and the impact they have on the end use.</p>
        </div>
        <div className="col-lg-4 text-white text-center">
          <h4>Follow Us on:</h4>
           <ul className="list-unstyled">

           </ul>
        </div>
        <div className="col-lg-4">
          <form className="input-group">
          <input type="text" className="form-control input-style form-control-sm bg-success text-center text-white" placeholder="You@domain.com" />
          <div className="input-group-append">
          <button type="button" className="btn btn-sm btn-style">Register</button>
        </div>
        </form>
        </div>
      </div>
    </div>
    <div className="container-fluid text-center text-white">Copyright © Framer Inc. All rights reserved.</div>
    </footer>
);
}


export default Footer;