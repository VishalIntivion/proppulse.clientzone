import React, { useState } from "react";
import { Pagination } from "react-bootstrap";

const Test2 = () => {
  const mychallenge = [{ challenge_name: "Maverick Trader Challenge" }];

  const itemsPerPage = 2;
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
        {currentChallenges.map(({ challenge_name }, index) => (
          <div className="challenge-card" key={index}>
            <div className="challenge-header">
              <div className="challenge-title">{challenge_name}</div>
              <div className="level-badge">Level : 01</div>
            </div>

            <hr className="text-secondary" />

            <div className="challenge-body">
              <div className="info-block">
                <div>Partnership</div>
                <div className="text-muted">1 objective remain</div>
                <div className="start-date">Start Date : 6/02/2025</div>
              </div>

              <div className="metric-card">
                <div className="d-flex align-items-center justify-content-between">
                  <div className="metric-title">↑ Profit</div>
                  <div className="metric-value text-success">-$344.96</div>
                </div>
                <div className="">
                  <img
                    src="/images/green-graph.svg"
                    alt="green graph"
                    srcset=""
                  />
                </div>
              </div>

              <div className="metric-card">
                <div className="d-flex align-items-center justify-content-between">
                  <div className="metric-title">⇅ Trading Days</div>
                  <div className="metric-value">2</div>
                </div>
                <div className="">
                  <img
                    src="/images/blue.svg"
                    alt="green graph"
                    srcset=""
                  />
                </div>
              </div>

              <div className="metric-card">
                <div className="d-flex align-items-center justify-content-between">
                  <div className="metric-title text-danger">
                    ↓ Max Overall Loss
                  </div>
                  <div className="metric-value text-danger">$11</div>
                </div>
                <div className="text-muted">$11 remains to fail</div>
                <div className="">
                  <img
                    src="/images/purple.svg"
                    alt="green graph"
                    srcset=""
                  />
                </div>
              </div>
            </div>

            <button className="arrow-btn">➤</button>
          </div>
        ))}
      </div>
      <Pagination
        currentpage={currentPage}
        totalpages={totalPages}
        onNext={handleNext}
        onPrev={handlePrev}
      />
    </div>
  );
};

export default Test2;
