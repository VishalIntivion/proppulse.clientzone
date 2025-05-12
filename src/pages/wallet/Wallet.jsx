import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import FormComponent from "../../components/FormComponent";

const Wallet = () => {
  const [openModal, setOpenModal] = useState(false);

  const handleBuyClick = () => setOpenModal(true);
  const handleClose = () => setOpenModal(false);

  const formConfig = [
    { label: "Wallet ID", name: "walletid", type: "text" },
    {
      label: "Currency",
      name: "currency",
      type: "select",
      options: ["USD", "EUR", "GSB"],
    },
  ];

  const handleFormSubmit = () => {
    alert("Form Submitted");
  };
  return (
    <div>
      <div className="wallet-page">
        <div className="d-flex align-items-center justify-content-between p-2">
          <div className="">My Wallets</div>

          <Button className="add-wallet" onClick={handleBuyClick}>
            Add Wallet
          </Button>
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
        <Modal className="wallet-modal" show={openModal} onHide={handleClose} centered size="sm">
          <Modal.Header closeButton className="border-bottom-0 pb-0">
            <Modal.Title className="w-100 text-center">Add Wallet</Modal.Title>
          </Modal.Header>

          <Modal.Body className="pt-0">
            <div className="d-flex align-items-center justify-content-center">
              <FormComponent config={formConfig} onSubmit={handleFormSubmit} />
            </div>
          </Modal.Body>
        </Modal>
      </div>
  );
};

export default Wallet;
