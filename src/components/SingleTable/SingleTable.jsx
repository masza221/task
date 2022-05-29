import React, { useState, useEffect, useMemo } from "react";
import { useParams } from "react-router-dom";
import { getProduct } from "../../utils/getData";
import Table from "../Table/Table";

const SingleTable = () => {
  const [element, setElement] = useState([]);
  const { id } = useParams();
  const error = useMemo(
    () => ({
      id: +id,
      name: "Brak produktu",
      year: "Brak produktu",
      color: "grey",
    }),
    [id]
  );

  useEffect(() => {
    const fetchData = async () => {
      const element = await getProduct(id);
      if (!element) return setElement([error]);
      setElement([element]);
    };
    fetchData();
  }, [id, error]);

  return (
    <div>
      <Table data={element} setPage={() => {}}></Table>
    </div>
  );
};

export default SingleTable;
