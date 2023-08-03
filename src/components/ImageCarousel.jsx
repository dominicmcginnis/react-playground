import { useState, useEffect } from 'react';
import DisplayImage from './DisplayImage';


export default () => {
    const [ images, setImages ] = useState([]);
    let [ image, setImage ] = useState(null);
  
    const fetchImages = async () => {
        let response = await fetch('images.json');
        let data = await response.json();
        setImages(data);
        setImage(data[0]);
    }

    useEffect(() => {
        fetchImages();
    },[]);

    return (
        <div>
            { (!image) ?  ( <div className="loading content-loading" /> ) : 
                (  <DisplayImage image={image} disableNext={(image.id === images.length - 1)} disablePrev={(image.id === 0)} handleImageChange={ (info) => { setImage(images[info]) }} />) 
            }
        </div>
    )
}