import React from 'react';
import './App.css';
import {useState, useEffect} from 'react';
import axios from 'axios';
import GalleryList from '../GalleryList/GalleryList.jsx'

function App() {

  const [picList, setPicList] = useState([]);
  // Pics will be stored in here by GET function and will be passed as a prop to GalleryList for mapping

  useEffect(() => {
    retrievePics();
  }, []) // Once, on load.

  const retrievePics = () => {
    axios({
      method: 'GET',
      url: '/gallery'
    }).then( response => {
      console.log(response.data);
      setPicList(response.data);
      // Changing the state of PicList to the response data
      // response.data sorts out what we need from response.rows from the server.
    }).catch( err => {
      console.error(err)
    })
  }

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <GalleryList galleryList={picList} retrievePics={retrievePics}/>
        {/* Passing to GalleryList to be used for mapping */}
      </div>
    );
}

export default App;
