import './GalleryItem.css';

function GalleryItem({pic}) {
    return(
        <>
            <img src={pic.path} ></img><p>Likes: {pic.likes}</p>
        </>
    )
}

export default GalleryItem;