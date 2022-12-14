import axios from 'axios';
import {useState} from 'react';
import './Form.css';

function Form({retrievePics}) {
    // in the future I would like to have a button called 
    // post or something and it would give a pop up modem
    // where these inputs would live but i'm not going to
    // do that at the moment
    const [newPath, setNewPath] = useState('');
    const [newDescription, setNewDescription] = useState('');
    const [newLikes, setNewLikes] = useState(0);
    // STATE VALUES

    const handlePost = (event) => {
        event.preventDefault();
        // There was a bug here for like 40 minutes double check preventDefault is spelt right
        console.log('you posted a pic!');


        // axios setting the state values to the values captured
        // by this client side POST and sent in an object labled req.body
        axios({
            method: 'POST',
            url: '/gallery',
            data: {
                path: newPath,
                description : newDescription,
                likes: newLikes
            }
        }).then( response =>{
            console.log(response.data);
            retrievePics();
            setNewPath('');
            setNewDescription('');
            setNewLikes(0);
            
        }).catch( err => {
            console.log(err);
        })
    } // end of post
// getting updated pics(refresh)
// resetting inputs after post

    return(
        <>
            <form onSubmit={handlePost}>
                <input 
                    className="input-revamp"
                    type="url"
                    placeholder="enter a url"
                    onChange={(event) => setNewPath(event.target.value)}
                    value={newPath}
                />
                <input 
                    className='input-revamp'
                    placeholder="caption"
                    onChange={(event) => setNewDescription(event.target.value)}
                    value={newDescription}
                />
                <button type="submit" className='button-style'>post</button>
            </form>
        </>
    )
}
// {/* I dont know if type="url" is necessary */}
// {/* targeting values and setting state values */}
export default Form;