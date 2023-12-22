import React from "react";
import "./App.css";
import TotalDisplay from "./TotalDisplay";
import CalcButton from "./CalcButton";
import { useReducer } from "react";
import reducer, { initialState } from "../reducers";
import actions from "../actions/index";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleNumberClick = (number) => {
    dispatch(actions.applyNumber(number));
  };

  const handleOperationClick = (operator) => {
    dispatch(actions.changeOperation(operator));
  };

  const handleClearDisplay = () => {
    dispatch(actions.clearDisplay());
  };

  const handleMemoryAddClick = () => {
    dispatch(actions.memoryAdd());
  };

  const handleMemoryRememberClick = () => {
    dispatch(actions.memoryRemember());
  };

  const handleMemoryClearClick = () => {
    dispatch(actions.memoryClear());
  };

  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#">
          {" "}
          Reducer Challenge
        </a>
      </nav>

      <div className="container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            <TotalDisplay value={state.total} />
            <div className="row details">
              <span id="operation">
                <b>Operation:</b> {state.operation}
              </span>
              <span id="memory">
                <b>Memory:</b> {state.memory}
              </span>
            </div>

            <div className="row">
              <CalcButton value={"M+"} onClick={handleMemoryAddClick} />
              <CalcButton value={"MR"} onClick={handleMemoryRememberClick} />
              <CalcButton value={"MC"} onClick={handleMemoryClearClick} />
            </div>

            <div className="row">
              <CalcButton value={1} onClick={() => handleNumberClick(1)} />
              <CalcButton value={2} onClick={() => handleNumberClick(2)} />
              <CalcButton value={3} onClick={() => handleNumberClick(3)} />
            </div>

            <div className="row">
              <CalcButton value={4} onClick={() => handleNumberClick(4)} />
              <CalcButton value={5} onClick={() => handleNumberClick(5)} />
              <CalcButton value={6} onClick={() => handleNumberClick(6)} />
            </div>

            <div className="row">
              <CalcButton value={7} onClick={() => handleNumberClick(7)} />
              <CalcButton value={8} onClick={() => handleNumberClick(8)} />
              <CalcButton value={9} onClick={() => handleNumberClick(9)} />
            </div>

            <div className="row">
              <CalcButton
                value={"+"}
                onClick={() => handleOperationClick("+")}
              />
              <CalcButton
                value={"*"}
                onClick={() => handleOperationClick("*")}
              />
              <CalcButton
                value={"-"}
                onClick={() => handleOperationClick("-")}
              />
            </div>

            <div className="row ce_button">
              <CalcButton value={"CE"} onClick={handleClearDisplay} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
