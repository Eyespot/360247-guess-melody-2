import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app.jsx';

const init = () => {
  const settings = {
    gameTime: 10,
    allowedErrors: 1,
    buttonStartOnClick: () => {}
  };

  ReactDOM.render(
      <App
        {...settings}
      />,
      document.querySelector(`#root`)
  );
};

init();
