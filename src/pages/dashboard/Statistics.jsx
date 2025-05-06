import React from "react";
import { FiHash } from "react-icons/fi";
import { FiPercent } from "react-icons/fi";

const Statistics = () => {
  const style = {
    backgroundImage: "linear-gradient(#1B2028 0%, #3A3A3A 100%)",
    color: "white",
    border: "1px solid #305689",
    borderRadius: "10px",
  };
  return (
    <div>
      <div className="static-style">
        <div className="heading">Statistics</div>
        <div className="stat-card d-flex flex-wrap gap-3 py-3">
          <div className="card flex-fill" style={style}>
            <div className="card-body">
              <span>No. of Trades</span>
              <div className="d-flex align-items-center justify-content-between">
                <div className="">0</div>
                <FiHash style={{color:"#01B574"}} size={21}/>
              </div>
            </div>
          </div>
          <div className="card flex-fill" style={style}>
            <div className="card-body">
              <span>Average Profit</span>
              <div className="d-flex align-items-center justify-content-between">
                <div className="">0</div>
                <img src="images/avg-profit.svg" alt="avg-profit" />
              </div>
            </div>
          </div>
          <div className="card flex-fill" style={style}>
            <div className="card-body">
              <span>Average Loss</span>
              <div className="d-flex align-items-center justify-content-between">
                <div className="">0</div>
                <img src="images/avg-loss.svg" alt="avg-profit" />
              </div>
            </div>
          </div>
          <div className="card flex-fill" style={style}>
            <div className="card-body">
              <span>Win Ratio</span>
              <div className="d-flex align-items-center justify-content-between">
                <div className="">0</div>
                <FiPercent style={{color:"#01B574"}} size={21}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
