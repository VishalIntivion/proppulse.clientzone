import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./assets/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login/Login";
import ForgotPassword from "./pages/ForgotPassword";
import Layout from "./components/Layout";
import Dashboard from "./pages/dashboard/Dashboard";
import MyChallenge from "./pages/mychallenge/MyChallenges";
import History from "./pages/history/History";
import Wallet from "./pages/wallet/Wallet";
import Withdrawal from "./pages/Withdrawal/Withdrawal";
import Support from "./pages/Support";
import Registration from "./pages/registration/Registration";
import Proppage from "./pages/dashboard/ChallengeDetail";
import FloatingChatBox from "./components/FloatingChatBox";
import MyChallengeDetail from "./pages/mychallenge/MyChallengeDetail";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Registration />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/home" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="mychallenges" element={<MyChallenge />} />
            <Route path="history" element={<History />} />
            <Route path="wallet" element={<Wallet />} />
            <Route path="withdrawal" element={<Withdrawal />} />
            <Route path="support" element={<Support />} />
            <Route path="detail-proppulse" element={<Proppage/>}/>
            <Route path="my-challenge-detail" element={<MyChallengeDetail/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
      <FloatingChatBox/>
    </>
  );
};

export default App;
