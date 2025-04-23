import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./assets/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login/Login";
import ForgotPassword from "./pages/ForgotPassword";
import Layout from "./components/Layout";
import Dashboard from "./pages/Dashboard";
import MyChallenge from "./pages/MyChallenges";
import History from "./pages/History";
import Wallet from "./pages/Wallet";
import Withdrawal from "./pages/Withdrawal";
import Support from "./pages/Support";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/home" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="mychallenges" element={<MyChallenge />} />
            <Route path="history" element={<History />} />
            <Route path="wallet" element={<Wallet />} />
            <Route path="withdrawal" element={<Withdrawal />} />
            <Route path="support" element={<Support />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
