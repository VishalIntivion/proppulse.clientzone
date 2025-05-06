import React, { useState } from "react";
import { MdOutlineArrowBackIos } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { Modal, Button } from "react-bootstrap";
import { RiVisaLine } from "react-icons/ri";
import { SiMastercard } from "react-icons/si";


const ChallengeDetail = () => {
  const style = {
    background: "black",
    padding: "5px 15px",
    marginTop: "25px",
    borderRadius: "10px",
    border: "1px solid #32405E",
    color: "white",
  };

  const objectives = [
    "Profit Target",
    "Trading Days",
    "Return All Time",
    "Return All Time Balance",
    "Return Day",
    "Return Day Balance",
    "Return Week",
    "Return Week Balance",
    "Geometric Average Return Monthly",
    "Geometric Average Return",
    "Monthly Balance",
    "Absolute Gain",
    "Sharpe Ratio",
    "Sharpe Ratio Balance",
    "Max Profit",
    "Max Profit Balance",
    "Average Daily Profit",
    "Average Daily Profit Balance",
  ];

  const step_1 = [
    "2",
    "10",
    "5",
    "0",
    "0",
    "0",
    "0",
    "10",
    "0",
    "0",
    "0",
    "11",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
  ];

  const step_2 = [
    "0",
    "13",
    "0",
    "0",
    "0",
    "0",
    "0",
    "1",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
  ];

  const [showModal, setShowModal] = useState(false);

  const handleBuyClick = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  };
  return (
    <div>
      <div className="challenge-detail">
        <div className="m-3" onClick={handleBack}>
          <MdOutlineArrowBackIos />
          Back
        </div>
        <div className="challenge-body">
          <div className="row mx-md-3 g-3">
            <div className="col-xl-3">
              <div className="challenge-card">
                <div className="challenge-heading">
                  Configure Your Challenge
                </div>
                <hr className="m-0" />
                <div className="mt-3">
                  <div className="challenge-btn">2-Step</div>
                </div>
                <div className="mt-3">
                  <div className="challenge-head">
                    Trading Account Currency:
                  </div>
                  <div className="challenge-btn">USD</div>
                </div>
                <div className="mt-3">
                  <div className="challenge-head">Account Balance:</div>
                  <div className="challenge-btn">$10000</div>
                </div>
                <div className="" style={style}>
                  <div className="challenge-detail">
                    <div className="">Profit Target</div>
                    <div className="">20%</div>
                  </div>
                  <div className="challenge-detail">
                    <div className="">Trading Days</div>
                    <div className="">10%</div>
                  </div>
                  <div className="challenge-detail">
                    <div className="">Max Drawndown Balance</div>
                    <div className="">1%</div>
                  </div>
                  <div className="challenge-detail border-bottom-0">
                    <div className="">Max Trailing Drawndown Balance</div>
                    <div className="">2%</div>
                  </div>
                </div>
                <div className="d-flex align-items-center justify-content-start m-2">
                  <input type="checkbox" id="challenge-check-box" />
                  <div className="ps-2">
                    I want to add some notes to request
                  </div>
                </div>

                <Button className="buy-btn w-100" onClick={handleBuyClick}>
                  Buy
                </Button>
              </div>
            </div>
            <div className="col-xl-9">
              <div className="row mb-3 g-3">
                <div className="col-xl-4">
                  <div className="challenge-card">
                    <div className="challenge-heading text-center">
                      Pro League
                    </div>
                    <div className="text-center">$1000</div>
                    <div className="d-flex align-items-center justify-content-between">
                      <span>Fee:$100</span>
                      <span>Step-2</span>
                    </div>
                  </div>
                </div>
                <div className="col-xl-8">
                  <div className="challenge-card">
                    <div className="challenge-heading">Milestone</div>
                    <hr className="m-0" />
                    <div className="d-flex flex-wrap gap-md-3">
                      <div className="milestone-content flex-fill">
                        <div className="card-body">Level : 01</div>
                      </div>
                      <div className="milestone-content flex-fill">
                        <div className="card-body">Balance : 100</div>
                      </div>
                      <div className="milestone-content flex-fill">
                        <div className="card-body">Profit Splits : 20%</div>
                      </div>
                      <div className="milestone-content flex-fill">
                        <div className="card-body">
                          Objective & Contraints : Not Specified
                        </div>
                      </div>
                    </div>
                    <div className="d-flex flex-wrap gap-md-3">
                      <div className="milestone-content flex-fill">
                        <div className="card-body">Level : 02</div>
                      </div>
                      <div className="milestone-content flex-fill">
                        <div className="card-body">Balance : 100</div>
                      </div>
                      <div className="milestone-content flex-fill">
                        <div className="card-body">Profit Splits : 20%</div>
                      </div>
                      <div className="milestone-content flex-fill">
                        <div className="card-body">
                          Objective & Contraints : Not Specified
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row g-3 mb-2">
                <div className="col-xl-4">
                  <div className="challenge-card">
                    <div className="objectives-panel card shadow-sm">
                      <div className="card-header text-white fw-bold text-center pt-0">
                        Objectives
                      </div>
                      <ul className="list-group list-group-flush">
                        {objectives.map((item, index) => (
                          <li
                            key={index}
                            className="list-group-item text-white"
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4">
                  <div className="challenge-card">
                    <div className="objectives-panel card shadow-sm">
                      <div className="card-header text-white fw-bold text-center pt-0">
                        Step-01
                      </div>
                      <ul className="list-group list-group-flush">
                        {step_1.map((item, index) => (
                          <li
                            key={index}
                            className="list-group-item text-white text-center"
                          >
                            {item === "0" ? <div>-</div> : <div>{item}%</div>}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4">
                  <div className="challenge-card">
                    <div className="objectives-panel card shadow-sm">
                      <div className="card-header text-white fw-bold text-center pt-0">
                        Step-02
                      </div>
                      <ul className="list-group list-group-flush">
                        {step_2.map((item, index) => (
                          <li
                            key={index}
                            className="list-group-item text-white text-center"
                          >
                            {item === "0" ? <div>-</div> : <div>{item}%</div>}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal show={showModal} onHide={handleClose} centered size="lg">
        <Modal.Header className="border-bottom-0 pb-0" closeButton></Modal.Header>
        <Modal.Body className="pt-0">
          <div className="row">
            {/* Left Column - Challenge Card */}
            <div className="col-lg-5">
              <div className="challenge-card">
                <div className="challenge-heading">Pro League</div>
                <hr className="m-0" />
                <div className="mt-3">
                  <div className="challenge-btn">2-Step</div>
                </div>
                <div className="mt-3">
                  <div className="challenge-head">
                    Trading Account Currency:
                  </div>
                  <div className="challenge-btn">USD</div>
                </div>
                <div className="mt-3">
                  <div className="challenge-head">Account Balance:</div>
                  <div className="challenge-btn">$10000</div>
                </div>
                <div style={style}>
                  <div className="challenge-detail">
                    <div>Profit Target</div>
                    <div>20%</div>
                  </div>
                  <div className="challenge-detail">
                    <div>Trading Days</div>
                    <div>10%</div>
                  </div>
                  <div className="challenge-detail">
                    <div>Max Drawdown Balance</div>
                    <div>1%</div>
                  </div>
                  <div className="challenge-detail border-bottom-0">
                    <div>Max Trailing Drawdown Balance</div>
                    <div>2%</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Payment Form */}
            <div className="col-lg-7">
              <div className="mb-3">
                <label className="form-label">Payment Method:</label>
                <div>
                  <input
                    type="radio"
                    name="payment"
                    id="card"
                    className="me-1"
                  />
                  <label htmlFor="card" className="me-3">
                    Card
                  </label>
                  <input
                    type="radio"
                    name="payment"
                    id="bank"
                    className="me-1"
                  />
                  <label htmlFor="bank">Bank Transfer</label>
                </div>
              </div>
              <div className="mb-3">
                <label className="form-label">Payment Options:</label>
                <div className="d-flex justify-content-start">
                  <img src="/images/master-card.svg" className="pe-1" alt="mastercard" />
                  <img src="/images/visa.svg" className="ps-1" alt="visa" />
                </div>
              </div>

              <div className="mb-3">
                <label className="form-label">Card Holder Name</label>
                <input type="text" className="form-control" />
              </div>

              <div className="mb-3">
                <label className="form-label">Credit Card Number</label>
                <input type="text" className="form-control" />
              </div>

              <div className="row">
                <div className="col-md-6 mb-3">
                  <label className="form-label">Expiration Date</label>
                  <input type="text" className="form-control" />
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label">CVV</label>
                  <input type="text" className="form-control" />
                </div>
              </div>

              <div className="form-check mb-3">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="terms"
                />
                <label className="form-check-label" htmlFor="terms">
                  To proceed with funding your account, you are requested to
                  accept the Terms and Conditions along with the Withdrawal
                  Policy
                </label>
              </div>
              <Button className="buy-btn w-100">Buy</Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default ChallengeDetail;
