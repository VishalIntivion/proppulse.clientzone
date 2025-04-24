import React from "react";
import { Link, useLocation } from "react-router-dom";
import { IoHomeSharp } from "react-icons/io5";
import { TbTargetArrow } from "react-icons/tb";
import { FaFile, FaWallet } from "react-icons/fa";
import { PiHandWithdrawFill } from "react-icons/pi";
import { BiSupport } from "react-icons/bi";
import { LuMail } from "react-icons/lu";
import { AiOutlineMenu } from "react-icons/ai";

const HeaderBottom = () => {
  const location = useLocation();

  const navItems = [
    { path: "/home", label: "Dashboard", icon: <IoHomeSharp size={24} /> },
    {
      path: "/home/mychallenges",
      label: "My Challenges",
      icon: <TbTargetArrow size={24} />,
    },
    { path: "/home/history", label: "History", icon: <FaFile size={20} /> },
    { path: "/home/wallet", label: "Wallet", icon: <FaWallet size={20} /> },
    {
      path: "/home/withdrawal",
      label: "Withdrawal",
      icon: <PiHandWithdrawFill size={24} />,
    },
    { path: "/home/support", label: "Support", icon: <BiSupport size={24} /> },
  ];

  return (
    <div className="header-bottom">
      <nav className="navbar navbar-expand-lg px-3">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <AiOutlineMenu fill="white" />
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 p-0">
              {navItems.map(({ path, label, icon }) => {
                const isActive = location.pathname === path;

                return (
                  <li key={path} className="nav-item">
                    <Link to={path}>
                      {React.cloneElement(icon, {
                        fill: "white",
                        className: isActive ? "active-icon" : "",
                      })}
                      <span className={isActive ? "active-list" : ""}>
                        {label}
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>

            <div className="d-flex align-items-center">
              <LuMail size={18} />
              <span className="ps-2">support@faceforex.com</span>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default HeaderBottom;
