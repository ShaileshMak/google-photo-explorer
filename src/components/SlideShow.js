import React, {useState, useEffect } from 'react';
import { connect } from 'react-redux'
import axios from 'axios';

import { fetchAlbumPhotoRequest, setAlbumPhotos, showError } from '../redux';

const SlideShow = (props) => {
    const [imageCounter, setImageCounter] = useState(0);
    const [albumPhotos, updateAlbumPhotos] = useState([]);
    const delay = 5000;

    const getPhotos = (albumId) => {
      props.fetchAlbumPhotoRequest();
      axios.post('https://photoslibrary.googleapis.com/v1/mediaItems:search', 
      {
        pageSize: 100,
        albumId: albumId
      }, 
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${props.photo.token}`
          } 
        }
      ).then(resp => {
        props.setAlbumPhotos(resp.data.mediaItems);
        updateAlbumPhotos(resp.data.mediaItems);
        }
      ).catch(error => {
        props.showError(error.message);
      });
  }

    useEffect(() => {
        //setAlbumId(props.albumId);
        if(!props) return;
        console.log('fetching album photos for slide show');
        getPhotos(props.albumId);

       let timerid = setInterval(() => {
          setImageCounter(prevImageCounter => prevImageCounter+1);
       }, delay); 
        return () => {
          clearTimeout(timerid);
        }
      }, [props.albumId]);

      useEffect( () => {
        (imageCounter === albumPhotos.length) && setImageCounter(0);
      },[imageCounter, albumPhotos])

      const getImage = () => (albumPhotos[imageCounter] ? <div className="slideshow-image-container"><img alt="TEXT" className="slideshow-image" src={`${albumPhotos[imageCounter].baseUrl}=w2048-h1024`}/></div>: '');

      return props.photo.loading ? (
        <h2>Loading...</h2>
      ) : props.photo.error ? (
        <h2>{props.photo.error}</h2>
      ) : (
        props.photo && props.photo.albums ? <div>
            <div className="slideshow-container">
              {getImage()}
            </div>
        </div>
        :''
      )
}
const mapStateToProps = state => {
    return {
        photo: state.photo
    }
  }
const mapDispatchToProps = (dispatch) => {
    return {
      fetchAlbumPhotoRequest: () => dispatch(fetchAlbumPhotoRequest()),
      setAlbumPhotos: () => dispatch(setAlbumPhotos()),
      showError: () => dispatch(showError())
    }
  }
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(SlideShow)