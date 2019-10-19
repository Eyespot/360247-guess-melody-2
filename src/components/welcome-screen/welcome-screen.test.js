import React from 'react';
import renderer from 'react-test-renderer';
import WelcomeScreen from "./welcome-screen";

it(`WelcomeScreen component renders correctly after relaunch`, () => {
  const tree = renderer
    .create(<WelcomeScreen
      time={0}
      errors={0}
      buttonStartOnClick={()=>{}}
    />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
