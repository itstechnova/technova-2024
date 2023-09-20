import React, { useState } from "react";


const Carousel = ({ folders, itemsPerPage }) => {
  const [currentPage, setCurrentPage] = useState(0);

  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const visibleFolders = folders.slice(startIndex, endIndex);

  const handleNextClick = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  return (
    <div className="carousel-container">
      <div className="carousel">
        {visibleFolders.map((folder, index) => (
          <div key={index} className="carousel-item">
            {folder}
          </div>
        ))}
      </div>
      <button
        className="next-button"
        onClick={handleNextClick}
        disabled={endIndex >= folders.length}
      >
        Next
      </button>
    </div>
  );
};

export default Carousel;
