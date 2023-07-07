// Import React and ReactDOM libraries
import React from "react";
import ReactDOM from "react-dom";

// Import the main CSS file
import "./index.css";

// Import the main App component
import App from "./App";

// Import the reportWebVitals function, which is used for measuring app performance
import reportWebVitals from "./reportWebVitals";

// Use ReactDOM to render the App component into the root div in the HTML
ReactDOM.render(
  // StrictMode is a wrapper component that checks for potential problems in the app during development
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  // The root div where the App component will be mounted
  document.getElementById("root")
);

// Call the reportWebVitals function. This can be used to log performance metrics or send them to an analytics endpoint.
// More info at: https://bit.ly/CRA-vitals
reportWebVitals();
