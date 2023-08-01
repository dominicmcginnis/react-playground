import { useState, useEffect } from 'react';
import DisplayImage from './DisplayImage';


export default () => {
    const [isLoading, setisLoading] = useState(true);    
    const [ images, setImages ] = useState([]);
    let [ image, setImage ] = useState(null);
  
    const fetchImages = async () => {
        setisLoading(true);
        let response = await fetch('images.json');
        let data = await response.json();
        //setImages(data);
        //setImage(data[0]);
        setisLoading(false);
    }

    useEffect(() => {
        fetchImages();
    });

    return (
        <div>
            <article>
            { isLoading || !image ?  ( <div className="loading content-loading" /> ) : (  <DisplayImage image={image} handleImageChange={ (info) => { /*setImage(images[info])*/ }} />) }
            </article>
        </div>
    )
}