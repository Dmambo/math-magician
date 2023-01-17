import React from 'react';
import './calculator.css';

export default class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="calculator">
        <div className="calculator__display">
          <div className="calculator__display__curr">0</div>
        </div>
        <div className="calculator__buttons">
          <div className="calculator__buttons__row">
            <button type="button" className="calculator__buttons__row__button">AC</button>
            <button type="button" className="calculator__buttons__row__button">+/-</button>
            <button type="button" className="calculator__buttons__row__button">%</button>
            <button type="button" className="calculator__buttons__row__button orange">&#247;</button>
          </div>
          <div className="calculator__buttons__row">
            <button type="button" className="calculator__buttons__row__button">7</button>
            <button type="button" className="calculator__buttons__row__button">8</button>
            <button type="button" className="calculator__buttons__row__button">9</button>
            <button type="button" className="calculator__buttons__row__button orange">*</button>
          </div>
          <div className="calculator__buttons__row">
            <button type="button" className="calculator__buttons__row__button">4</button>
            <button type="button" className="calculator__buttons__row__button">5</button>
            <button type="button" className="calculator__buttons__row__button">6</button>
            <button type="button" className="calculator__buttons__row__button orange">-</button>
          </div>
          <div className="calculator__buttons__row_">
            <button type="button" className="calculator__buttons__row__button">1</button>
            <button type="button" className="calculator__buttons__row__button">2</button>
            <button type="button" className="calculator__buttons__row__button">3</button>
            <button type="button" className="calculator__buttons__row__button orange">+</button>
          </div>
          <div className="calculator__buttons__row">
            <button type="button" className="calculator__buttons__row__button zero">0</button>
            <button type="button" className="calculator__buttons__row__button">.</button>
            <button type="button" className="calculator__buttons__row__button orange">=</button>
          </div>
        </div>
      </div>
    );
  }
}
