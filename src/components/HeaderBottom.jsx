import React from "react";
import { IoHomeSharp } from "react-icons/io5";
import { TbTargetArrow } from "react-icons/tb";
import { FaFile } from "react-icons/fa";
import { FaWallet } from "react-icons/fa6";
import { BiSupport } from "react-icons/bi";
import { LuMail } from "react-icons/lu";
import { Link, useLocation } from "react-router-dom";
import { PiHandWithdrawFill } from "react-icons/pi";

const HeaderBottom = () => {
  const location = useLocation();

  const navItems = [
    { path: "/home", label: "Dashboard", icon: <IoHomeSharp size={22} /> },
    {
      path: "/home/mychallenges",
      label: "My Challenges",
      icon: <TbTargetArrow size={22} />,
    },
    { path: "/home/history", label: "History", icon: <FaFile size={18} /> },
    { path: "/home/wallet", label: "Wallet", icon: <FaWallet size={22} /> },
    {
      path: "/home/withdrawal",
      label: "Withdrawal",
      icon: <PiHandWithdrawFill size={24} />,
    },
    { path: "/home/support", label: "Support", icon: <BiSupport size={22} /> },
  ];

  return (
    <div className="header-bottom">
      <div className="d-flex align-items-center justify-content-md-between justify-content-center">
        <ul className="d-flex">
          {navItems.map(({ path, label, icon }) => {
            const isActive = location.pathname === path;

            return (
              <li key={path}>
                <Link to={path}>
                  {React.cloneElement(icon, {
                    fill: "white",
                    className: isActive ? "active-icon" : "",
                  })}
                  <span className={isActive ? "active-list" : ""}>{label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
        <div className="support-mail">
          <LuMail />
          <div className="ps-1">suppor@faceforex.com</div>
        </div>
      </div>
    </div>
  );
};

export default HeaderBottom;
