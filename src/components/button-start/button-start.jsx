import React from 'react';
import PropTypes from 'prop-types';

const ButtonStart = ({buttonStartOnClick}) => {

  return <button className="welcome__button" onClick={buttonStartOnClick}>
    <span className="visually-hidden">Начать игру</span>
  </button>;
};

ButtonStart.propTypes = {
  buttonStartOnClick: PropTypes.func
};

export default ButtonStart;
