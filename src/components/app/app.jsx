import React from 'react';
import PropTypes from 'prop-types';
import WelcomeScreen from './../welcome-screen/welcome-screen.jsx';

const App = (props) => {
  const {gameTime, allowedErrors} = props;

  return <WelcomeScreen
    time={gameTime}
    errors={allowedErrors}
  />;
};

App.propTypes = {
  gameTime: PropTypes.number.isRequired,
  allowedErrors: PropTypes.number.isRequired,
};

export default App;
