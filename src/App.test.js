// Import the 'render' and 'screen' functions from '@testing-library/react' for testing React components
import { render, screen } from '@testing-library/react';

// Import the main app component from the App.js file
import App from './App';

// Declare a new test, with the description 'renders learn react link'
test('renders learn react link', () => {
  // Render the App component in a virtual DOM
  render(<App />);

  // Use the 'getByText' function from the 'screen' object to search for an element that contains the text 'learn react'
  const linkElement = screen.getByText(/learn react/i);

  // Use the 'expect' function from Jest and the 'toBeInTheDocument' function from '@testing-library/jest-dom'
  // to assert that the 'linkElement' is present in the document
  expect(linkElement).toBeInTheDocument();
});
