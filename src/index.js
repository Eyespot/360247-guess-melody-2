import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app.jsx';

const init = () => {
  const settings = {
    gameTime: 5,
    allowedErrors: 3
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
