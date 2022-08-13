import GalleryItem from "../GalleryItem/GalleryItem";
import{useState} from 'react';
import axios from 'axios';

function GalleryList({galleryList, retrievePics}) {
    // Pass galleryList as a prop from App.jsx
    const [likeCount, setLikeCount] = useState(0)

    const likeCounter = (pic) => {
        axios({
            method: 'PUT',
            url: `/gallery/like/${pic.id}`
        }).then((response) => {
            retrievePics()
        }).catch((err) => {
            console.error(err);
        })
    }

    return(
        <>
            <h3>Image</h3>
            <ul>
                {galleryList.map((pic) => ( 
                    // Mapping is like a for loop. This adds each GalleryItem component to the list.
                    <li key={pic.id}><GalleryItem pic={pic} likeCounter={likeCounter} pic={pic}/></li>
                    // Include a key wherever map is used.
                ))}
            </ul>
        </>
    )
}

export default GalleryList;