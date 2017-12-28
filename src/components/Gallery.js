import React from 'react';
import './Gallery.css'
import Pictures from '../Pictures.json'

class Contact extends React.Component {

  render() {
  var pictures=Pictures.map((data,i)=>
    <li key={i} className="gallery-li"><img className="gallery-img" src={data.picture}/></li>

);
    return (
      <div>
        <h1>Pizde na sve strane</h1>
          <ul className="gallery-ul">{pictures}</ul>
      </div>
    );
  }
}

export default Contact;
