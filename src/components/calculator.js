import React, { useState } from 'react';
import './styles/calculator.css';
import calculate from './logic/calculate';

const Calculator = () => {
  const [state, setState] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const clickHandler = (e) => {
    const result = calculate(state, e.target.textContent);
    setState((prevState) => ({
      ...prevState,
      ...result,
    }));
  };

  const { total, next } = state;
  return (
    <>
      <div className="calculate">
        <div className="math">
          <h1>Let&apos;s do some math!</h1>
        </div>
        <div className="calculator">
          <div className="calculator__display">
            <div className="calculator__display__curr">
              {next || total || 0}
            </div>
          </div>
          <div className="calculator__buttons">
            <div className="calculator__buttons__row">
              <button
                type="button"
                className="calculator__buttons__row__button"
                onClick={clickHandler}
              >
                AC
              </button>
              <button
                type="button"
                className="calculator__buttons__row__button"
                onClick={clickHandler}
              >
                +/-
              </button>
              <button
                type="button"
                className="calculator__buttons__row__button"
                onClick={clickHandler}
              >
                %
              </button>
              <button
                type="button"
                className="calculator__buttons__row__button orange"
                onClick={clickHandler}
              >
                &#247;
              </button>
            </div>
            <div className="calculator__buttons__row">
              <button
                type="button"
                className="calculator__buttons__row__button"
                onClick={clickHandler}
              >
                7
              </button>
              <button
                type="button"
                className="calculator__buttons__row__button"
                onClick={clickHandler}
              >
                8
              </button>
              <button
                type="button"
                className="calculator__buttons__row__button"
                onClick={clickHandler}
              >
                9
              </button>
              <button
                type="button"
                className="calculator__buttons__row__button orange"
                onClick={clickHandler}
              >
                *
              </button>
            </div>
            <div className="calculator__buttons__row">
              <button
                type="button"
                className="calculator__buttons__row__button"
                onClick={clickHandler}
              >
                4
              </button>
              <button
                type="button"
                className="calculator__buttons__row__button"
                onClick={clickHandler}
              >
                5
              </button>
              <button
                type="button"
                className="calculator__buttons__row__button"
                onClick={clickHandler}
              >
                6
              </button>
              <button
                type="button"
                className="calculator__buttons__row__button orange"
                onClick={clickHandler}
              >
                -
              </button>
            </div>
            <div className="calculator__buttons__row_">
              <button
                type="button"
                className="calculator__buttons__row__button"
                onClick={clickHandler}
              >
                1
              </button>
              <button
                type="button"
                className="calculator__buttons__row__button"
                onClick={clickHandler}
              >
                2
              </button>
              <button
                type="button"
                className="calculator__buttons__row__button"
                onClick={clickHandler}
              >
                3
              </button>
              <button
                type="button"
                className="calculator__buttons__row__button orange"
                onClick={clickHandler}
              >
                +
              </button>
            </div>
            <div className="calculator__buttons__row">
              <button
                type="button"
                className="calculator__buttons__row__button zero"
                onClick={clickHandler}
              >
                0
              </button>
              <button
                type="button"
                className="calculator__buttons__row__button"
                onClick={clickHandler}
              >
                .
              </button>
              <button
                type="button"
                className="calculator__buttons__row__button orange"
                onClick={clickHandler}
              >
                =
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Calculator;
