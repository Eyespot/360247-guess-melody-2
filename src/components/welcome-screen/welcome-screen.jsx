import React from 'react';
import PropTypes from 'prop-types';
import ButtonStart from "./../button-start/button-start.jsx";

const WelcomeScreen = ({time, errors, buttonStartOnClick}) => {

  return <section className="welcome">
    <div className="welcome__logo">
      <img src="img/melody-logo.png" alt="Угадай мелодию" width="186" height="83"/>
    </div>
    <ButtonStart buttonStartOnClick={buttonStartOnClick}/>
    <h2 className="welcome__rules-title">Правила игры</h2>
    <p className="welcome__text">Правила просты:</p>
    <ul className="welcome__rules-list">
      <li>За {time} минут нужно ответить на все вопросы.</li>
      <li>Можно допустить {errors} ошибки.</li>
    </ul>
    <p className="welcome__text">Удачи!</p>
  </section>;
};

WelcomeScreen.propTypes = {
  time: PropTypes.number.isRequired,
  errors: PropTypes.number.isRequired,
  buttonStartOnClick: PropTypes.func.isRequired
};

export default WelcomeScreen;
