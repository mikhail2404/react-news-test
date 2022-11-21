import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

import {persistor, store} from "./redux/configureStore";
import App from "./App";
import { PersistGate } from "redux-persist/integration/react";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
          <PersistGate loading={null} persistor={persistor}>
            <App />
          </PersistGate>
      </Router>
    </Provider>
  </React.StrictMode>
);
