import React from "react";
import { Link } from "react-router-dom";
import { AiOutlinePoweroff } from "react-icons/ai";
import HeaderBottom from "./HeaderBottom";

const Header = () => {
  return (
    <header>
      <div className="header-top">
        <div className="row">
          <div className="col-lg-1">
            <img src="/images/Logo.svg" alt="Logo" />
          </div>
          <div className="col-lg-10">
            <div className="d-md-flex align-items-start">
              <div className="prop-acc">
                <div className="">Steve Smith</div>
                <div className="bg-primary p-2 rounded">
                  <span>TP.NO.:</span>
                  <span>1820953734</span>
                </div>
              </div>
              <div className="balance-card w-100 p-2">
                <div className="d-md-flex border-end">
                  <div className="card">
                    <div className="card-body">
                      <span>Balance</span>
                      <h4>$23523.45</h4>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-body">
                      <span>Equity</span>
                      <h4>$23523.45</h4>
                    </div>
                  </div>
                </div>
                <div className="d-md-flex border-end">
                  <div className="card">
                    <div className="card-body">
                      <span>Fee</span>
                      <h4>$100</h4>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-body">
                      <span>Margin</span>
                      <h4>$700.099942</h4>
                    </div>
                  </div>
                </div>
                <div className="d-md-flex">
                  <div className="card">
                    <div className="card-body">
                      <span>Credit</span>
                      <h4>$0</h4>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-body">
                      <span>Profit</span>
                      <h4>$0</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-1 text-md-end text-center">
            <AiOutlinePoweroff />
          </div>
        </div>
      </div>
      <hr className="seprator" />
      <HeaderBottom />
    </header>
  );
};

export default Header;
