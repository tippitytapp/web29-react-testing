import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders header', () => {
// AAA: Arrange, Act, Assert
//Arrange: set up the testing environment
// Get the DOM ready (render it)
// Set up any test data that we want in the DOM

//Act: Take the "action" that we want to testing
// e.g. click the submit button
// fill out one of the inputs

//Assert: Test that the data or app responded the way you expected it to
//testing that something is visibile to the user
// test that you got routed to the right place
// test that there is a new component in the UI

// ARRANGE => ACT => ASSERT

// ARRANGE
  const {getByText} = render(<App />);
  // const result = render(<App />);
  // console.log(result.debug());
  // console.log(result);

  //ACT
  // theres really no action to take


  //ASSERT
  const linkElement = getByText(/add new animal/i); // i means case insensitive manner
  expect (linkElement).toBeInTheDocument();
});
