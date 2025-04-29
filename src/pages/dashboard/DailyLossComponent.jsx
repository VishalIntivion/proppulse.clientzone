import React from "react";

const DailyLossComponent = () => {
  const style = {

  };
  return (
    <div>
      <div className="daily-loss-limit">
        <div className="d-flex align-items-center">
          <div className="me-2">Daily Loss Limit</div>
          <span className="timestamp">09:18:21</span>
        </div>
        <hr className="my-2" />
        <div className="col-card">
          <div className="d-flex align-items-center justify-content-between">
            <div className="card-heading">500USD Left </div>
            <span>100%</span>
          </div>
          <hr className="m-0" />
          <div className="content">
            <p>Maximum Daily Loss : 500 USD</p>
            <p>Today’s starting balance/equity : 10000.00 USD</p>
            <p>Threshold at : 9500.0 USD</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DailyLossComponent;
