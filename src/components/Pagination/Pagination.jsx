import React from "react";
import Button from "../Button/Button";
import "./pagination.css";

const Pagination = ({ page, setPrevPage, setNextPage }) => {
  return (
    <div className="pagination">
      <Button onClick={setPrevPage} className="pagination__button">
        &#8249;
      </Button>
      <p>{page}</p>
      <Button onClick={setNextPage} className="pagination__button">
        &#8250;
      </Button>
    </div>
  );
};
export default Pagination;
