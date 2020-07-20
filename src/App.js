import React from "react";
import { BrowserRouter, HashRouter } from "react-router-dom";
import { Provider } from "react-redux";

import Routes from "./Routes";
import Store from "./Store";

function App() {
  return (
    <Provider store={Store}>
      <BrowserRouter basename="mysite">
        <Routes />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
