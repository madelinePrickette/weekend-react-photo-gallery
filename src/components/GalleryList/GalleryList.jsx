import GalleryItem from "../GalleryItem/GalleryItem";

function GalleryList({galleryList}) {
    // Pass galleryList as a prop from App.jsx
    return(
        <>
            <h3>Image</h3>
            <ul>
                {galleryList.map((pic) => ( 
                    // Mapping is like a for loop. This adds each GalleryItem component to the list.
                    <li key={pic.id}><GalleryItem pic={pic}/></li>
                    // Include a key wherever map is used.
                ))}
            </ul>
        </>
    )
}

export default GalleryList;