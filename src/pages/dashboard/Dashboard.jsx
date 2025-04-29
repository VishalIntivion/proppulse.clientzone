import React from "react";
import ActiveTab from "./ActiveTab";
import InactiveTab from "./InactiveTab";
import PendingTab from "./PendingTab";
import Statistics from "./Statistics";
import DailyLossComponent from "./DailyLossComponent";

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
        <div className="col-xl-6">
          <div className="challenges-detail">
            <div>Challenges Details</div>
            <hr className="my-2" />
            <div className="status">
              <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link active"
                    id="pills-home-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-home"
                    type="button"
                    role="tab"
                    aria-controls="pills-home"
                    aria-selected="true"
                  >
                    <span className="text-primary px-1">{"\u25CF"}</span> Active
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="pills-profile-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-profile"
                    type="button"
                    role="tab"
                    aria-controls="pills-profile"
                    aria-selected="false"
                  >
                    <span className="text-danger px-1">{"\u25CF"}</span>{" "}
                    Inactive
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="pills-contact-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-contact"
                    type="button"
                    role="tab"
                    aria-controls="pills-contact"
                    aria-selected="false"
                  >
                    <span className="text-warning px-1">{"\u25CF"}</span>{" "}
                    Pending
                  </button>
                </li>
              </ul>
              <div className="tab-content" id="pills-tabContent">
                <div
                  className="tab-pane fade show active"
                  id="pills-home"
                  role="tabpanel"
                  aria-labelledby="pills-home-tab"
                >
                  <ActiveTab />
                </div>
                <div
                  className="tab-pane fade"
                  id="pills-profile"
                  role="tabpanel"
                  aria-labelledby="pills-profile-tab"
                >
                  <InactiveTab />
                </div>
                <div
                  className="tab-pane fade"
                  id="pills-contact"
                  role="tabpanel"
                  aria-labelledby="pills-contact-tab"
                >
                  <PendingTab />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-6">
          <div className="row g-2">
            <div className="col-lg-12">
              <DailyLossComponent />
            </div>
            <div className="col-lg-12">
              <div className="stats">
                <Statistics />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
