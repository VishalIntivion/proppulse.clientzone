import React from "react";
import { GrFormPrevious } from "react-icons/gr";
import { MdOutlineNavigateNext } from "react-icons/md";

const Pagination = ({ currentpage, totalpages, onNext, onPrev }) => {
  return (
    <div className="pagination-controls mt-4 d-flex justify-content-md-start justify-content-center">
      <button
        onClick={onPrev}
        disabled={currentpage === 1}
        className={currentpage !== 1 ? "button-enabled" : ""}
      >
        <GrFormPrevious fill="#1F263E" />
      </button>
      <span className="mx-3">{currentpage}</span>
      <button
        onClick={onNext}
        disabled={currentpage === totalpages}
        className={currentpage !== totalpages ? "button-enabled" : ""}
      >
        <MdOutlineNavigateNext fill="white" />
      </button>
    </div>
  );
};

export default Pagination;
