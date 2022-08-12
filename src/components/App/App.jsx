import React from 'react';
import './App.css';
import {useState, useEffect} from 'react';
import axios from 'axios';
import GalleryList from '../GalleryList/GalleryList.jsx'

function App() {

  const [picList, setPicList] = useState([]);

  useEffect(() => {
    retrievePics();
  }, [])

  const retrievePics = () => {
    axios({
      method: 'GET',
      url: '/gallery'
    }).then( response => {
      console.log(response.data);
      setPicList(response.data)
    }).catch( err => {
      console.error(err)
    })
  }

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <p>Gallery goes here</p>
        <GalleryList galleryList={picList}/>
      </div>
    );
}

export default App;
