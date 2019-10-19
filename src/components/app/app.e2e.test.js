import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from "../app/app.jsx";

Enzyme.configure({adapter: new Adapter()});

it(`ButtonStartOnClick calls correctly`, () => {
  const clickHandler = jest.fn();
  const app = mount(<App
    gameTime={0}
    allowedErrors={0}
    onClick={clickHandler}
  />);

  const startButton = app.find(`button`);
  startButton.simulate(`click`, {preventDefault() {}});
  expect(clickHandler).toHaveBeenCalledTimes(1);
});
