import React from 'react';
import './calculator.css';
import calculate from './logic/calculate';

export default class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
  }

  clickHandler = (e) => {
    const result = calculate(this.state, e.target.textContent);
    this.setState((prevState) => ({
      ...prevState,
      ...result,
    }));
  };

  render() {
    const { total, next } = this.state;
    return (
      <div className="calculator">
        <div className="calculator__display">
          <div className="calculator__display__curr">{ next || total || 0}</div>
        </div>
        <div className="calculator__buttons">
          <div className="calculator__buttons__row">
            <button type="button" className="calculator__buttons__row__button" onClick={this.clickHandler}>AC</button>
            <button type="button" className="calculator__buttons__row__button" onClick={this.clickHandler}>+/-</button>
            <button type="button" className="calculator__buttons__row__button" onClick={this.clickHandler}>%</button>
            <button type="button" className="calculator__buttons__row__button orange" onClick={this.clickHandler}>&#247;</button>
          </div>
          <div className="calculator__buttons__row">
            <button type="button" className="calculator__buttons__row__button" onClick={this.clickHandler}>7</button>
            <button type="button" className="calculator__buttons__row__button" onClick={this.clickHandler}>8</button>
            <button type="button" className="calculator__buttons__row__button" onClick={this.clickHandler}>9</button>
            <button type="button" className="calculator__buttons__row__button orange" onClick={this.clickHandler}>*</button>
          </div>
          <div className="calculator__buttons__row">
            <button type="button" className="calculator__buttons__row__button" onClick={this.clickHandler}>4</button>
            <button type="button" className="calculator__buttons__row__button" onClick={this.clickHandler}>5</button>
            <button type="button" className="calculator__buttons__row__button" onClick={this.clickHandler}>6</button>
            <button type="button" className="calculator__buttons__row__button orange" onClick={this.clickHandler}>-</button>
          </div>
          <div className="calculator__buttons__row_">
            <button type="button" className="calculator__buttons__row__button" onClick={this.clickHandler}>1</button>
            <button type="button" className="calculator__buttons__row__button" onClick={this.clickHandler}>2</button>
            <button type="button" className="calculator__buttons__row__button" onClick={this.clickHandler}>3</button>
            <button type="button" className="calculator__buttons__row__button orange" onClick={this.clickHandler}>+</button>
          </div>
          <div className="calculator__buttons__row">
            <button type="button" className="calculator__buttons__row__button zero" onClick={this.clickHandler}>0</button>
            <button type="button" className="calculator__buttons__row__button" onClick={this.clickHandler}>.</button>
            <button type="button" className="calculator__buttons__row__button orange" onClick={this.clickHandler}>=</button>
          </div>
        </div>
      </div>
    );
  }
}
