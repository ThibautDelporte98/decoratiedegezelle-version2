import React, { useState } from "react";
import "../../scss/services/overview-detail-steps.scss";

const WayOfWork = ({ items }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 1; // Change this value to adjust the number of items per page

  const totalPages = Math.ceil(items.length / itemsPerPage);


  const handlePrevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const renderData = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    return items.slice(startIndex, endIndex).map((item, index) => (
      <li className="wayofwork-item" key={index}>
        <div className="number">
          <span className="number-symbol">{item.id}</span>
        </div>
        <div className="wayofwork-content">
          <h2>{item.title}</h2>
          <ul>
            {item.descriptions.map((desc, descIndex) => (
              <li className="wayofwork-item-list" key={descIndex}>
                <span className="bold">{desc.method}: </span> {desc.description}
              </li>
            ))}
          </ul>
        </div>
      </li>
    ));
  };

  return (
    <div className="wayofwork">
      <div className="container">
        <div className="wayofwork-page">
          <div className="row">
            <div className="col-12 col-xl-8">
              <ol className="wayofwork-list">
                {renderData()}
              </ol>
            </div>
            <div className="col-12 col-xl-4">
              <div className="pagination-navigation">
                <button
                  onClick={handlePrevPage}
                  disabled={currentPage === 1}
                  className="prev-btn disable-btn"
                >
                  Vorige 
                </button>
                <button
                  onClick={handleNextPage}
                  disabled={currentPage === totalPages}
                  className="next-btn disable-btn"
                >
                  Volgende stap 
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WayOfWork;
