import React from "react";

const Dashboard = () => {
  return (
    <div>
      <div className="dash-top">
        <h3 className="text-white">Account Details</h3>
        <hr className="text-white" />

        <div className="d-flex flex-wrap gap-md-3">
          <div className="card flex-fill">
            <div className="card-body">
              Status : <span className="text-primary px-1">{"\u25CF"}</span>{" "}
              Active
            </div>
          </div>

          <div className="card flex-fill">
            <div className="card-body">Max Daily Profit : $0.93</div>
          </div>

          <div className="card flex-fill">
            <div className="card-body">Trading Days : $44963.4</div>
          </div>

          <div className="card flex-fill">
            <div className="card-body">Max Daily Loss : $00</div>
          </div>

          <div className="card flex-fill">
            <div className="card-body">Current Phase :</div>
          </div>

          <div className="card flex-fill">
            <div className="card-body">Start Date : 06/02/2025</div>
          </div>

          <div className="card flex-fill">
            <div className="card-body">End Date : --/--/--</div>
          </div>
        </div>
      </div>

      <div className="row g-2">
        <div className="col-lg-6">
          <div className="challenges-detail">
            <div>Challenges Details</div>
            <hr className="my-2" />
            <div className="status">
              <ul className="d-flex p-0">
                <li className="pe-2 border-end">
                  <span className="text-primary px-1">{"\u25CF"}</span> Active
                </li>
                <li className="pe-2 border-end">
                  <span className="text-danger px-1">{"\u25CF"}</span> Inactive
                </li>
                <li>
                  <span className="text-warning px-1">{"\u25CF"}</span> Pending
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="row g-2">
            <div className="col-lg-12">
              <div className="daily-loss-limit">
                <h3>Daily Loss Limit</h3>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="stats">
                <h3>Statistics</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
