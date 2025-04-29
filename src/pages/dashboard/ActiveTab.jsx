import React, { useState } from "react";
import { GrFormPrevious } from "react-icons/gr";
import { MdOutlineNavigateNext } from "react-icons/md";

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
    {
      name: "Maverick Trader Challenge",
      amt: "$10,000",
      target: "10%",
      maxprofit: "10%",
      avgdailyprofit: "$30",
    },
  ];

  const itemsPerPage = 3;
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
      <section className="d-md-flex align-items-start justify-content-md-start justify-content-center">
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
                <button>See More</button>
              </div>
            </article>
          )
        )}
      </section>

      {/* Pagination Controls */}
      <div className="pagination-controls mt-4 d-flex justify-content-md-start justify-content-center">
        <button
          onClick={handlePrev}
          disabled={currentPage === 1}
          className={currentPage !== 1 ? "button-enabled" : ""}
        >
          <GrFormPrevious fill="#1F263E" />
        </button>
        {/* #1F263E */}
        <span>{currentPage}</span>
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

export default ActiveTab;
