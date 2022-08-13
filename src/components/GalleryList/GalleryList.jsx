import GalleryItem from "../GalleryItem/GalleryItem";
import{useState} from 'react';
import axios from 'axios';
import './GalleryList.css';

function GalleryList({galleryList, retrievePics}) {
    // Pass galleryList as a prop from App.jsx

    const likeCounter = (pic) => {
        // Here we need to pass in pic from the map, 
        // and this function is written in the same 
        // component as the map.
        axios({
            method: 'PUT',
            url: `/gallery/like/${pic.id}`
        }) // here, we are using the route gallery, like, then the pic id to  
        // target the specific item component so it can delete itself.
        .then((response) => {
            retrievePics()
            // Here we call retrieve pics so it can refresh with updated 
            // info on the DOM. new info being likeCount.
        }).catch((err) => {
            console.error(err);
        })
    }

    return(
        <>
            <ul>
                {galleryList.map((pic) => ( 
                    // Mapping is like a for loop. This adds each GalleryItem component to the list.
                    <li key={pic.id}><GalleryItem pic={pic} likeCounter={likeCounter}/></li>
                    // Include a key wherever map is used.
                ))}
            </ul>
        </>
    )
}

export default GalleryList;