import React from 'react';
import renderer from 'react-test-renderer';
import App from './app.jsx';

it(`App component renders correctly after relaunch`, () => {
  const tree = renderer
    .create(<App
      gameTime={0}
      allowedErrors={0}
    />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
