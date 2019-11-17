import { FETCH_ALBUM, 
        SET_TOKEN,
        SET_ALBUMS, 
        SHOW_ERROR,
        FETCH_ALBUM_PHOTOS,
        SET_ALBUM_PHOTOS } from './googlePhotosTypes';
const initialState = {
    token: '',
    loading: false,
    albums: [],
    albumPhotos: [],
    error: ''
}
const googlePhotoReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_ALBUM :
            return {
                ...state,
                loading: true,
                error: ''
            }
        case SET_TOKEN :
            debugger;
            return {
                ...state,
                token: action.payLoad
            }
        case SET_ALBUMS :
                return {
                    ...state,
                    albums: action.payLoad,
                    loading: false,
                }
        case FETCH_ALBUM_PHOTOS :
                return {
                    ...state,
                    loading: true,
                    error: ''
                }
        case SET_ALBUM_PHOTOS :
                return {
                    ...state,
                    albumPhotos: action.payLoad,
                    loading: false,
                }
        case SHOW_ERROR :
                return {
                    ...state,
                    loading: false,
                    error: action.payLoad
                }
        default : 
            debugger;
            return state
    }

};

export default googlePhotoReducer;