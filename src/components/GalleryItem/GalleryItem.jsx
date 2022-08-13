import './GalleryItem.css';
import {useState} from 'react';

function GalleryItem({pic}) {
    // Create this variable to set a status of a clicked image or description
    let [imageClicked, setImageClicked] = useState(false)

    console.log(imageClicked); // Should show true or false in the console
    return(
        <div onClick={() => setImageClicked(!imageClicked)}>
            {/* Ternary operators to switch between image and description, ? asks "if true" and : represents "else" */}
            {imageClicked === true ? <><p>{pic.description}</p><button>Like</button><p>Likes: {pic.likes}</p></> : <><img src={pic.path} ></img><button>Like</button><p>Likes: {pic.likes}</p></>}
        </div>
    )
}

export default GalleryItem;