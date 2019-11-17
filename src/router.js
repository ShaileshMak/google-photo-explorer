import React from "react";

import Login from './components/Login';
import PhotoAlbums from './components/PhotoAlbums';
import SlideShow from './components/SlideShow';

const routes = {
  "/": () => <Login />,
  "/album": () => <PhotoAlbums />,
  "/album/:id": ({id}) => <SlideShow albumId={id}/>
};

export default routes;