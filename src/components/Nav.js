import React from 'react';
import {Link} from 'react-router-dom';
import './Nav.css'

class Nav extends React.Component {
  render() {
    return (

      <div className="col-md-3">
        <h1 className="name-text">MILICA</h1><h1 className="name-text1">STREZOVSKI</h1>
        <ul className="nav1">
          <li><Link to='/' style={{color:'grey',textDecoration:'none'}}>MAIN</Link></li>
           <li><Link to='/Gallery' style={{color:'grey',textDecoration:'none'}}>GALLERY</Link></li>
             <li><Link to='/About'style={{color:'grey',textDecoration:'none'}}>ABOUT</Link></li>
               <li><Link to='/Contact'style={{color:'grey',textDecoration:'none'}}>CONTACT</Link></li>
                </ul>
              </div>

    );
  }
}

export default Nav;
