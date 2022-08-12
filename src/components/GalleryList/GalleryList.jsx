import GalleryItem from "../GalleryItem/GalleryItem";

function GalleryList({galleryList}) {
    return(
        <>
            <h3>Image</h3>
            <ul>
                {galleryList.map((pic) => (
                    <li key={pic.id}><GalleryItem pic={pic}/></li>
                ))}
            </ul>
        </>
    )
}

export default GalleryList;