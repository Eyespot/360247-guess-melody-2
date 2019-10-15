import React from 'react';
import PropTypes from 'prop-types';
import WelcomeScreen from './../welcome-screen/welcome-screen.jsx';

const App = ({gameTime, allowedErrors}) => {

  return <WelcomeScreen
    time={gameTime}
    errors={allowedErrors}
  />;
};

App.defaultProps = {
  gameTime: 5,
  allowedErrors: 3
};

App.propTypes = {
  gameTime: PropTypes.number.isRequired,
  allowedErrors: PropTypes.number.isRequired,
};

export default App;
