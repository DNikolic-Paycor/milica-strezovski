import React from 'react';
import {Link} from 'react-router-dom';
import './Nav.css'

class Nav extends React.Component {
  render() {
    return (

      <div className="col-md-3">
        <h1 className="name-text">MILICA</h1><h1 className="name-text1">STREZOVSKI</h1>
        <ul className="nav1">
          <li><Link to='/'>MAIN</Link></li>
          <li><Link to='/Gallery'>GALLERY</Link></li>
          <li><Link to='/About'>ABOUT</Link></li>
          <li><Link to='/Contact'>CONTACT</Link></li>
        </ul>
      </div>
    );
  }
}

export default Nav;
