import React from 'react';
import './Gallery.css'
import Pictures from '../Pictures.json'
import Lightbox from 'react-images'
import Gallery from 'react-photo-gallery';

const photos = [
  { src: 'https://cdn.pixabay.com/photo/2016/03/28/12/35/cat-1285634_960_720.png', width: 4, height: 3 },
  { src: 'https://source.unsplash.com/Dm-qxdynoEc/800x799', width: 1, height: 1 },
  { src: 'https://source.unsplash.com/qDkso9nvCg0/600x799', width: 3, height: 4 },
  { src: 'https://source.unsplash.com/iecJiKe_RNg/600x799', width: 3, height: 4 },
  { src: 'https://source.unsplash.com/epcsn8Ed8kY/600x799', width: 3, height: 4 },
  { src: 'https://source.unsplash.com/NQSWvyVRIJk/800x599', width: 4, height: 3 },
  { src: 'https://source.unsplash.com/zh7GEuORbUw/600x799', width: 3, height: 4 },
  { src: 'https://source.unsplash.com/PpOHJezOalU/800x599', width: 4, height: 3 },
  { src: 'https://source.unsplash.com/I1ASdgphUH4/800x599', width: 4, height: 3 }
];

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
