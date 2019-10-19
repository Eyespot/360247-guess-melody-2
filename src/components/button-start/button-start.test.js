import React from 'react';
import renderer from 'react-test-renderer';
import ButtonStart from "./button-start.jsx";

it(`ButtonStart component renders correctly after relaunch`, () => {
  const tree = renderer
    .create(<ButtonStart
      onClick={()=>{}}
    />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
