import React from 'react';
import './App.css';
import {useState, useEffect} from 'react';
import axios from 'axios';
import GalleryList from '../GalleryList/GalleryList.jsx'
import Form from '../Form/Form.jsx';

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
      console.log('logging response data...', response.data);
      setPicList(response.data);
      // Changing the state of PicList to the response data
      // response.data sorts out what we need from response.rows from the server.
    }).catch( err => {
      console.error(err)
    })
  }

  const searchAlert = () => {
    console.log('clicked search');
    alert('nice! you clicked the search button. Hopefully that will come soon!');
  }

  // logging to check that picList still contains the data we want after db transfer.
  console.log('this is picList...', picList);
    return (
      <div className="App">
        <header className="App-header">
          <div className="align-items">
            <h1 className="App-title gradient-text marshmellow-text inline-block">Catstagram</h1>
            <input placeholder="search" className="input-styling"/><button className='search-button' onClick={() => searchAlert()}>🔍</button>
            <p className="margin-left p-tag">urstrayedaway</p>
            <img className="headerImage inline-block" src="images/profile-img.jpg"/>
          </div>
        </header>
        <Form retrievePics={retrievePics}/>
        <GalleryList galleryList={picList} retrievePics={retrievePics}/>
        {/* Passing to GalleryList to be used for mapping */}
        <div className='bottom-div'>
          <p className='text-size-color'>&copy; 2022 v0.1.0 Created by Madeline Prickette</p>
          <p className='text-size-color'>Catstagram is powered by The Comfort of my Bed and jokes and Sleep</p>
        </div>
      </div>
    );
}

export default App;
