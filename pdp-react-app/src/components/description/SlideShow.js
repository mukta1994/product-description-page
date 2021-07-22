import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';


const SlideShow = (props) => {

let images = []

props.showimgs.forEach(function (arrayItem) {
  images.push({original : arrayItem.src,thumbnail : arrayItem.src})
});


    return (<div>
         <ImageGallery items={images} />
    </div>)
}

export default SlideShow;
