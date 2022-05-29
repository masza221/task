import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../Button/Button";
import "./table.css";

export default function Table({ data, setPage }) {
  const navigate = useNavigate();

  return (
    <>
      <Button
        className={"back-btn"}
        onClick={() => {
          setPage(1);
          navigate("/");
        }}
      >
        Go to start
      </Button>
      <div className="table">
        <div className="table__tr">
          <div className="table__td td__id">ID</div>
          <div className="table__td td__name">Name</div>
          <div className="table__td td__year">Year</div>
        </div>
        {data.map((element) => (
          <div
            key={element.id}
            style={{ backgroundColor: element.color }}
            className="table__tr"
          >
            <div className="table__td td__id">{element.id}</div>
            <div className="table__td td__name">{element.name}</div>
            <div className="table__td td__year">{element.year}</div>
          </div>
        ))}
      </div>
    </>
  );
}
