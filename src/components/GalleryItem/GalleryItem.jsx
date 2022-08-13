import './GalleryItem.css';
import {useState} from 'react';

function GalleryItem({pic, likeCounter}) {
    // Create this variable to set a status of a clicked image or description
    let [imageClicked, setImageClicked] = useState(false)

    console.log(imageClicked); // Should show true or false in the console
    return(
        <>
            <div onClick={() => setImageClicked(!imageClicked)}>
                {/* Ternary operators to switch between image and description, ? asks "if true" and : represents "else" */}
                {imageClicked === true ? <><p className="pTagSize">{pic.description}</p></> : <><img src={pic.path} ></img></>}
            </div>
            <><button onClick={() => likeCounter(pic)}>❤️</button><p>Likes: {pic.likes}</p></>
        </>
    )
}

export default GalleryItem;