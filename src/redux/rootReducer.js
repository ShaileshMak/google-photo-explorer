import { combineReducers } from 'redux'

import googlePhotoReducer from './photo/googlePhotoReducer';

const rootReducer = combineReducers({
    photo: googlePhotoReducer
});

export default rootReducer;