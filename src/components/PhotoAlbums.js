import React, { useEffect } from 'react';
import { connect } from 'react-redux'

import { fetchAlbum } from '../redux'
import { navigate } from "hookrouter";

const PhotoAlbums = ({ photo, fetchAlbum}) => {

    useEffect(() => {
        debugger;
        console.log('fetching album data');
        fetchAlbum(photo.token);
      }, [fetchAlbum]);

      return photo.loading ? (
        <h2>Loading...</h2>
      ) : photo.error ? (
        <h2>{photo.error}</h2>
      ) : (
        photo && photo.albums ? <div>
          <h2>Albums</h2>
            <div>
              {
                photo.albums.map(album => (
                    <div key={album.id} onClick={() => navigate(`/album/${album.id}`) } className="album-cover-container"><img className="album-cover img-thumbnail rounded float-left" alt="TEXT" src={album.coverPhotoBaseUrl}/><br></br>{album.title}</div>
                ))
              }
            </div>
        </div>
        :''
      )
}
const mapStateToProps = state => {
  debugger;
    return {
        photo: state.photo
    }
  }
  
  const mapDispatchToProps = dispatch => {
    return {
        fetchAlbum: token => dispatch(fetchAlbum(token))
    }
  }
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(PhotoAlbums)