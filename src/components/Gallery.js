import React from 'react';
import './Gallery.css'
import Pictures from '../Pictures.json'
import Lightbox from 'react-images'
import Gallery from 'react-photo-gallery';

class Contact extends React.Component {
  constructor(props){
    super()
    this.state = { currentImage: 0 }
  }
  
  openLightbox = (event, obj) => {
    this.setState({
      currentImage: obj.index,
      lightboxIsOpen: true,
    });
  }
  closeLightbox = () => {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false,
    });
  }
  gotoPrevious = () => {
    this.setState({
      currentImage: this.state.currentImage - 1,
    });
  }
  gotoNext = () => {
    this.setState({
      currentImage: this.state.currentImage + 1,
    });
  }
  
  render() {
    // const pictures = Pictures.map((data, i)=>
    // //  <li key={i} className=".gallery-li">
    //   <img className="gallery-img" key={i} src={data}/>
    //   // </li>
    // );   
    // console.log(Pictures)
    return (
      <div>
        <h1>galerija</h1>
        
        <ul>
        <Gallery photos={Pictures} onClick={this.openLightbox} columns={4}/>
        <Lightbox images={Pictures}
                  onClose={this.closeLightbox}
                  onClickPrev={this.gotoPrevious}
                  onClickNext={this.gotoNext}
                  currentImage={this.state.currentImage}
                  isOpen={this.state.lightboxIsOpen}
        />
        {/* {pictures} */}
        </ul>
      </div>
    );
  }
}

export default Contact;
