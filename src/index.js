import React from "react";
import ReactDOM from "react-dom";
import { Helmet } from "react-helmet";

import * as serviceWorker from "./serviceWorker";
import App from "./App";
import GlobalStyles from "./styles/GlobalStyles";

ReactDOM.render(
  <React.StrictMode>
    <Helmet>
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap"
        rel="stylesheet"
      />
    </Helmet>
    <GlobalStyles />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
