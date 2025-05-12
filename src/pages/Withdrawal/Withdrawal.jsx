import React from "react";
import WithRequest from "./WithRequest";
import WithStatus from "./WithStatus";

const Withdrawal = () => {
  return (
    <div>
      <div className="withdrawal-page">
        <h6>Withdrawal</h6>
        <hr className="m-0" />
        <div className="withdrawal-body">
          <ul className="nav nav-tabs border-0" id="myTab" role="tablist">
            <li className="nav-item border-end pe-2" role="presentation">
              <button className="nav-link active" id="withdrawal-req" data-bs-toggle="tab" data-bs-target="#withdrawal-req-body" type="button" role="tab" aria-controls="home" aria-selected="true">Withdrawal Request</button>
            </li>
            <li className="nav-item" role="presentation">
              <button className="nav-link ms-3" id="withdrawal-status" data-bs-toggle="tab" data-bs-target="#withdrawal-status-body" type="button" role="tab" aria-controls="profile" aria-selected="false">Withdrawal Status</button>
            </li>
          </ul>
          <div className="tab-content" id="myTabContent">
            <div className="tab-pane fade show active" id="withdrawal-req-body" role="tabpanel" aria-labelledby="home-tab">
              <WithRequest/>
            </div>
            <div className="tab-pane fade" id="withdrawal-status-body" role="tabpanel" aria-labelledby="profile-tab">
              <WithStatus/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Withdrawal;
