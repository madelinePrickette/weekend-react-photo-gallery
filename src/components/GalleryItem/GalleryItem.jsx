import './GalleryItem.css';
import {useState} from 'react';

function GalleryItem({pic}) {

    let [imageClicked, setImageClicked] = useState(false)

    console.log(imageClicked);
    return(
        <div onClick={() => setImageClicked(!imageClicked)}>
            {imageClicked === true ? <><p>{pic.description}</p><button>Like</button><p>Likes: {pic.likes}</p></> : <><img src={pic.path} ></img><button>Like</button><p>Likes: {pic.likes}</p></>}
        </div>
    )
}

export default GalleryItem;