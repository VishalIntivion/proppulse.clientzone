import React from "react";

const Wallet = () => {
  return (
    <div>
      <div className="wallet-page">
        <div className="d-flex align-items-center justify-content-between p-2">
          <div className="">My Wallets</div>
          <div className="add-wallet">Add Wallet</div>
        </div>
        <hr className="m-0" />
        <div className="table-head">
          <div className="">Wallet Account ID</div>
          <div className="">Currency</div>
          <div className="">Balance</div>
          <div className="">View Transactions</div>
          <div className="">Top Up</div>
        </div>
        <div className="msg text-center p-2" style={{ fontSize: "12px" }}>
          No Wallets To Show
        </div>
      </div>
    </div>
  );
};

export default Wallet;
