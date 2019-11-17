import React from 'react';
import { Provider } from "react-redux";
import { useRoutes } from "hookrouter";
import routes from "./router";

import store from './redux/store';
import './App.css';


function App() {
  const routeResult = useRoutes(routes);

  return (
    <Provider store={store}>
        <div className="App">
          {routeResult}
        </div>
    </Provider>
  );
}

export default App;
