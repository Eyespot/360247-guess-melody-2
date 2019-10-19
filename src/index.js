import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app.jsx';

const init = () => {
  const settings = {
    gameTime: 10,
    allowedErrors: 1
  };

  ReactDOM.render(
      <App
        gameTime={settings.gameTime}
        allowedErrors={settings.allowedErrors}
      />,
      document.querySelector(`#root`)
  );
};

init();
