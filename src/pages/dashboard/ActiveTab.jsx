import React, { useState } from "react";
import { Link } from "react-router-dom";
import Pagination from "../../components/Pagination";

const ActiveTab = () => {
  const challenges = [
    {
      name: "Maverick Trader Challenge",
      amt: "$10,000",
      target: "10%",
      maxprofit: "10%",
      avgdailyprofit: "$30",
    },
    {
      name: "Maverick Trader Challenge",
      amt: "$10,000",
      target: "10%",
      maxprofit: "10%",
      avgdailyprofit: "$30",
    },
    {
      name: "Maverick Trader Challenge",
      amt: "$10,000",
      target: "10%",
      maxprofit: "10%",
      avgdailyprofit: "$30",
    },
    {
      name: "Maverick Trader Challenge",
      amt: "$10,000",
      target: "10%",
      maxprofit: "10%",
      avgdailyprofit: "$30",
    },
    {
      name: "Maverick Trader Challenge",
      amt: "$10,000",
      target: "10%",
      maxprofit: "10%",
      avgdailyprofit: "$30",
    },
    {
      name: "Maverick Trader Challenge",
      amt: "$10,000",
      target: "10%",
      maxprofit: "10%",
      avgdailyprofit: "$30",
    },
    {
      name: "Maverick Trader Challenge",
      amt: "$10,000",
      target: "10%",
      maxprofit: "10%",
      avgdailyprofit: "$30",
    },
  ];

  const itemsPerPage = 2;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(challenges.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentChallenges = challenges.slice(
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
      <section className="d-md-flex align-items-start justify-content-md-start justify-content-center flex-wrap gap-3">
        {currentChallenges.map(
          ({ name, amt, target, maxprofit, avgdailyprofit }, index) => (
            <article className="challenge" key={index}>
              <div>
                <div className="challenge-top">
                  <div className="step">Step 1</div>
                  <div className="challenge-name">{name}</div>
                  <div className="challenge-amount">{amt}</div>
                </div>
                <div className="challenge-metrics">
                  <div className="metric border-top border-primary rounded-4">
                    <span className="label">Profit Target</span>
                    <span className="value">{target}</span>
                  </div>
                  <div className="metric">
                    <span className="label">Max Profit</span>
                    <span className="value">{maxprofit}</span>
                  </div>
                  <div className="metric">
                    <span className="label">Average Daily Profit</span>
                    <span className="value">{avgdailyprofit}</span>
                  </div>
                </div>
                <button>
                  <Link to="detail-proppulse">See More</Link>
                </button>
              </div>
            </article>
          )
        )}
      </section>

      {/* Separated Pagination Component */}
      <Pagination
        currentpage={currentPage}
        totalpages={totalPages}
        onnext={handleNext}
        onprev={handlePrev}
      />
    </div>
  );
};

export default ActiveTab;
