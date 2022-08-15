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

    const handlePost = (event) => {
        event.preventDefault();
        console.log('you posted a pic!');

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


    // DIVS ARE SET TO THE WIDTH OF AN IPHONE ------------------------------------------
    // ANY PIC LARGER OR SMALLER THAN 412.5 PX -----------------------------------------
    // WILL MESS WITH THE CSS SO I APOLOGIZE IF IT -------------------------------------
    // LOOKS HORRIBLE I WANT TO FIX THAT IN THE FUTURE ---------------------------------
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

export default Form;