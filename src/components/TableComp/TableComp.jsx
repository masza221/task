import Pagination from "../Pagination/Pagination";
import Table from "../Table/Table";
import useData from "../../hooks/useData";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./tableComp.css";

function TableComp() {
  const { id } = useParams();
  const {
    data,
    loading,
    numberOfPages,
    numberOfElementsInTable,
    page,
    setPage,
  } = useData([], id);
  const [currentData, setCurrentData] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {

    const values = data.slice(0 + page * numberOfElementsInTable - numberOfElementsInTable, page * numberOfElementsInTable );
    setCurrentData(values);
  }, [data, page, numberOfElementsInTable]);

  const setNextPage = () => {
    if (page >= numberOfPages) return setPage(numberOfPages);
    navigate(`/${page + 1}`);
    setPage((prev) => prev + 1);
  };
  const setPrevPage = () => {
    if (page <= 1) return setPage(1);
    navigate(`/${page - 1}`);
    setPage((prev) => prev - 1);
  };

  return (
    <>
      {loading ? (
        "loading"
      ) : (
        <div className="conteiner">
          <Table data={currentData} page={page} setPage={setPage}></Table>
          <Pagination
            page={page}
            setNextPage={setNextPage}
            setPrevPage={setPrevPage}
          ></Pagination>
        </div>
      )}
    </>
  );
}

export default TableComp;
