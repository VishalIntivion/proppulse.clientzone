import React, { useState } from "react";
// import { Pagination } from "react-bootstrap";
import { HiChevronDoubleRight } from "react-icons/hi";
import { GrFormPrevious } from "react-icons/gr";
import { MdOutlineNavigateNext } from "react-icons/md";
import { Link } from "react-router-dom";

const MyChallenges = () => {
  const mychallenge = [
    { challenge_name: "Maverick Trader Challenge", challenge_level: "01" },
    { challenge_name: "Maverick Trader Challenge", challenge_level: "03" },
    { challenge_name: "Alpha Challenge", challenge_level: "02" },
    { challenge_name: "Beta Challenge", challenge_level: "05" },
    { challenge_name: "Gamma Challenge", challenge_level: "06" },
  ];
  const itemsPerPage = 1;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(mychallenge.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentChallenges = mychallenge.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    <div>
      <div className="my_challenge">
        {currentChallenges.map(({ challenge_name, challenge_level }, index) => (
          <div className="my-challenge-card" key={index}>
            <div className="challenge-header">
              <div className="challenge-title">{challenge_name}</div>
              <div className="level-badge">Level : {challenge_level}</div>
            </div>

            <hr className="text-secondary" />

            <div className="my-challenge-body">
              <div className="info-block">
                <div>Partnership</div>
                <div className="text-muted">1 objective remain</div>
                <div className="start-date">Start Date : 6/02/2025</div>
              </div>

              <div className="metric-card">
                <div className="d-flex align-items-center justify-content-between">
                  <div className="metric-title">↑ Profit</div>
                  <div className="metric-value">-$344.96</div>
                </div>
                <div className="mychallenge-text text-end text-secondary"></div>
                <div className="">
                  <img
                    src="/images/green-graph.svg"
                    alt="green graph"
                    className="w-100"
                  />
                </div>
              </div>

              <div className="metric-card">
                <div className="d-flex align-items-center justify-content-between">
                  <div className="metric-title">⇅ Trading Days</div>
                  <div className="metric-value">2</div>
                </div>
                <div className="mychallenge-text text-end text-secondary">
                  $11{" "}
                </div>
                <div className="">
                  <img
                    src="/images/blue.svg"
                    alt="green graph"
                    className="w-100"
                  />
                </div>
              </div>

              <div className="metric-card">
                <div className="d-flex align-items-center justify-content-between">
                  <div className="metric-title">↓ Max Overall Loss</div>
                  <div className="metric-value text-danger">$11</div>
                </div>
                <div className="mychallenge-text text-end text-secondary">
                  $11 remains to fail
                </div>
                <div className="">
                  <img
                    src="/images/purple.svg"
                    alt="green graph"
                    className="w-100"
                  />
                </div>
              </div>
              <div className="d-flex align-items-center justify-content-center">
                <button className="arrow-btn">
                  <Link to="my-challenge-detail">
                  <HiChevronDoubleRight />
                  </Link>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="pagination-controls mt-4 d-flex justify-content-md-end justify-content-center">
        <button
          onClick={handlePrev}
          disabled={currentPage === 1}
          className={currentPage !== 1 ? "button-enabled" : ""}
        >
          <GrFormPrevious fill="#1F263E" />
        </button>
        <span className="mx-3">{currentPage}</span>
        <button
          onClick={handleNext}
          disabled={currentPage === totalPages}
          className={currentPage !== totalPages ? "button-enabled" : ""}
        >
          <MdOutlineNavigateNext fill="white" />
        </button>
      </div>
    </div>
  );
};

export default MyChallenges;
