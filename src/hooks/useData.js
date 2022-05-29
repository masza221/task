import { useEffect, useState } from 'react'
import { getData } from '../utils/getData';

function useData(init, id) {

  const [data, setData] = useState(init);
  const [loading, setLoading] = useState(true)
  const [numberOfPages, setNumberOfPages] = useState(0)
  const [page, setPage] = useState(+id || 1);
  const numberOfElementsInTable = 5

  useEffect(() => {
    const fetchData = async () => {
      const arr = await getData()
      setData(arr);
      setLoading(false)
      setNumberOfPages(Math.ceil(arr.length / numberOfElementsInTable))
    };
    fetchData();
  }, []);


  return { data, loading, numberOfPages, page, numberOfElementsInTable, setPage }
}

export default useData