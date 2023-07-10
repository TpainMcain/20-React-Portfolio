// Import the React library
import React from "react";

// Define a functional component 'Pre'. It receives 'props' as its argument.
function Pre(props) {
  // The component returns a div element. The id of the div is set conditionally.
  // If 'props.load' is true, the id is set to 'preloader', otherwise it is set to 'preloader-none'.
  return <div id={props.load ? "preloader" : "preloader-none"}></div>;
}

// Export the 'Pre' component, so it can be imported and used in other files.
export default Pre;
