import {  
          FETCH_ALBUM, 
          SET_TOKEN,
          SET_ALBUMS, 
          SHOW_ERROR,
          FETCH_ALBUM_PHOTOS,
          SET_ALBUM_PHOTOS 
        } from './googlePhotosTypes';
    
import axios from 'axios';

export const fetchAlbumRequest = () => {
  return {
    type: FETCH_ALBUM
  }
}

export const setToken = (token) => {
  debugger;
  return {
    type: SET_TOKEN,
    payLoad: token
  }
}

export const setAlbum = (albums) => {
  return {
    type: SET_ALBUMS,
    payLoad: albums
  }
}

export const fetchAlbumPhotoRequest = () => {
    return {
      type: FETCH_ALBUM_PHOTOS
    }
  }
  
  export const setAlbumPhotos = (albumPhotos) => {
    return {
      type: SET_ALBUM_PHOTOS,
      payLoad: albumPhotos
    }
  }
  
export const showError = (error) => {
  return {
    type: SHOW_ERROR,
    payLoad: error
  }
}

export function fetchAlbum(token) {
    return dispatch => {    
        dispatch(fetchAlbumRequest());
        axios.get('https://photoslibrary.googleapis.com/v1/albums', {
            params: {
                pageSize: 50,
                excludeNonAppCreatedData: false
            },
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            }
        })
        .then(resp => {
            const albums = resp.data.albums;
            dispatch(setAlbum(albums));
        })
        .catch(error => {
            dispatch(showError(error.message));
        });
    }
}

  