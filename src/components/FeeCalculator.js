import React from "react";

const txAmount = 1000;

export default function FeeCalculator() {
  return (
    <main>
      <h2 className="about--title">Average Fee Calculator</h2>
      <div className="input--boxes">
        <div className="input-row">
          <input
            type={"number"}
            placeholder={"Enter amount"}
            className="input--field"
          />
          <div>
            <h4 className="input--title">Transactions</h4>
          </div>
        </div>
        <div className="input-row">
          <input
            type={"number"}
            placeholder={"Value of transactions"}
            className="input--field"
          />
          <div>
            <h4 className="input--title">Total Value</h4>
          </div>
        </div>
        <div className="input-row">
          <input
            type={"number"}
            placeholder={"Percentage for pool"}
            className="input--field"
          />
          <div>
            <h4 className="input--title">Pool Percentage</h4>
          </div>
        </div>
      </div>
      <div className="center-button">
        <button id="calculate-average-fee">Calculate</button>
      </div>
      <h3 className="about--title">Results</h3>
      <div className="text--box">
        <p className="about--text">
          You have set a total of {txAmount} transactions <br></br>
          You have set a total value of ${txAmount} in transactions <br></br>
          You have set a total of {txAmount} transactions <br></br>
        </p>
      </div>
    </main>
  );
}
