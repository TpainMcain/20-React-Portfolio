// reportWebVitals is a function that takes a callback function (onPerfEntry) as an argument.
const reportWebVitals = onPerfEntry => {
    // It first checks if the onPerfEntry argument exists and is a function
    if (onPerfEntry && onPerfEntry instanceof Function) {
      // The import('web-vitals') statement dynamically imports the 'web-vitals' library that has the metrics you are going to use.
      import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
        // getCLS is for Cumulative Layout Shift
        getCLS(onPerfEntry);
        // getFID is for First Input Delay
        getFID(onPerfEntry);
        // getFCP is for First Contentful Paint
        getFCP(onPerfEntry);
        // getLCP is for Largest Contentful Paint
        getLCP(onPerfEntry);
        // getTTFB is for Time To First Byte
        getTTFB(onPerfEntry);
      });
    }
  };
  
  // The function is then exported for use elsewhere in your application
  export default reportWebVitals;
  