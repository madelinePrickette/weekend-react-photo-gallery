import './GalleryItem.css';
import {useState} from 'react';

function GalleryItem({pic, likeCounter, deletePic}) {
    // Create this variable to set a status of a clicked image or description
    const [imageClicked, setImageClicked] = useState(false)
    // I AM KEEPING THIS VARIABLE LOCAL AND NOT BRINGING IT TO THE DB!!! 
    // TESTED AND STILL WORKS!

    console.log(imageClicked); // Should show true or false in the console
    return(
        <div className='spacing-posts'>
            <div className='post-border'>
                <p className='postition-name'>urstrayedaway</p>
                <div onClick={() => setImageClicked(!imageClicked)} className='top-margin'>
                    {/* Ternary operators to switch between image and description, ? asks "if true" and : represents "else" */}
                    {imageClicked === true ? <p className="pTagSize">{pic.description}</p> : <img src={pic.path}></img>}
                </div>
                <div className='bottom-margin'><div className='inline padding-right-270 traditional-text'><button onClick={() => likeCounter(pic)} className="inline margin-right-7 button-radius">❤️</button><p className='inline'>Likes: {pic.likes}</p></div><button onClick={() => deletePic(pic)} className='inline traditional-text button-radius'>Delete</button></div>
            </div>
        </div>
    )
}

export default GalleryItem;