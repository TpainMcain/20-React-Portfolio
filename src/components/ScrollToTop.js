// Import useEffect hook from React
// Import useLocation hook from react-router-dom
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  // useLocation hook returns an object which has the current location.
  // Destructuring to get 'pathname' from the location object
  const { pathname } = useLocation();

  // useEffect hook is called with a function and an array of dependencies.
  // In this case, the dependency is 'pathname'. useEffect hook will run the function
  // whenever 'pathname' changes
  useEffect(() => {
    // window.scrollTo(0, 0) scrolls the window to the top left.
    window.scrollTo(0, 0);
  }, [pathname]); // Dependency array

  // This component doesn't render anything, so it returns null
  return null;
}

// Export the component for use in other files
export default ScrollToTop;
