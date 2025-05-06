import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { BsChatSquareTextFill } from "react-icons/bs";

const FloatingChatBox = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChatBox = () => setIsOpen(!isOpen);

  return (
    <>
      <div className="chat-icon" onClick={toggleChatBox}>
        <BsChatSquareTextFill/>
      </div>

      {isOpen && (
        <div className="chatbox-container shadow-lg">
          <div className="chatbox-header d-flex justify-content-between align-items-center p-2 bg-primary text-white">
            <span>Support Chat</span>
            <button
              className="btn-close btn-close-white"
              onClick={toggleChatBox}
            ></button>
          </div>
          <div className="chatbox-body p-3">
            <div className="chat-message text-muted mb-2">
              👋 Hi! How can we help you?
            </div>
          </div>
          <Form className="chatbox-footer p-2 border-top">
            <Form.Group className="mb-0 d-flex">
              <Form.Control type="text" placeholder="Type your message..." />
              <Button variant="primary" className="ms-2">
                Send
              </Button>
            </Form.Group>
          </Form>
        </div>
      )}
    </>
  );
};

export default FloatingChatBox;
