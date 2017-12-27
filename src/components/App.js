import React from 'react';
import Nav from './Nav.js'
import Main from './Main.js'
import Gallery from './Gallery.js'
import About from './About.js'
import Contact from './Contact.js'
import Footer from './Footer.js'
import {Route} from 'react-router-dom';


class App extends React.Component {
  render() {
    return (
      <div>
        <div className="row">
          <Nav/>
            <div className="col-md-9">
              <Route exact path="/" component={Main}/>
                <Route path="/Gallery" component={Gallery}/>
                  <Route path="/About" component={About}/>
                    <Route path="/Contact" component={Contact}/>
                    </div>
                  </div>
        <Footer/>
        </div>
    );
  }
}

export default App;
