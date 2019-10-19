import React from 'react';
import PropTypes from 'prop-types';
import WelcomeScreen from './../welcome-screen/welcome-screen.jsx';

const App = ({gameTime, allowedErrors, buttonStartOnClick}) => {

  return <WelcomeScreen
    time={gameTime}
    errors={allowedErrors}
    buttonStartOnClick={buttonStartOnClick}
  />;
};

App.defaultProps = {
  gameTime: 5,
  allowedErrors: 3,
  buttonStartOnClick() {}
};

App.propTypes = {
  gameTime: PropTypes.number.isRequired,
  allowedErrors: PropTypes.number.isRequired,
  buttonStartOnClick: PropTypes.func.isRequired
};

export default App;
